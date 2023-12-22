import { conferences, type Conference } from "$db/conferences";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { ObjectId } from 'mongodb';
import type { RequestEvent } from "./$types";


/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();

	// Apparently the mongo driver types dont accept objectIds in queries
	// but this works, we just have to cast it to any to tell typescript not to worry.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const conference = await conferences.findOne({_id: new ObjectId(event.params.id) as any, submittedBy: session!.user!.email!});

	if (conference == null) {
		throw redirect(307, "/not-found");
	}

	conference._id = conference._id.toString();

	return {
		conference,
	}
}


/** @type {import('./$types').Actions} */
export const actions = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: async (event: RequestEvent) => {
		const data = await event.request.formData();
        const name = data.get('conference_name') as string;
        const date = new Date(data.get('conference_date') as string);
        const theme = data.get('conference_theme') as string;
        const location = data.get('conference_location') as string;
		const link = data.get('conference_link') as string;
        const free = data.get('conference_free');
        const session = await event.locals.getSession();

        const conference: Conference = {
            name,
            date,
            theme,
            location,
			link,
            paid: !free,
            submittedBy: session!.user!.email!
        }

		// Apparently the mongo driver types dont accept objectIds in queries
		// but this works, we just have to cast it to any to tell typescript not to worry.
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
        await conferences.replaceOne({_id: new ObjectId(event.params.id) as any}, conference);

        return {
            result: event.params.id
        }
	}
};