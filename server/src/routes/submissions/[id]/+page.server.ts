import { type Conference, getSubmittedConference, replaceConference } from "$db/conferences";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { RequestEvent } from "./$types";


/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();

	const conference = await getSubmittedConference(event.params.id, session!.user!.email!);

	if (conference == null) {
		throw redirect(307, "/not-found");
	}

	return {
		conference,
	}
}


/** @type {import('./$types').Actions} */
export const actions = {
	update: async (event: RequestEvent) => {
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
        await replaceConference(event.params.id, session!.user!.email!, conference);

        return {
            result: event.params.id
        }
	},
	toggleArchive: async (event: RequestEvent) => {
        const session = await event.locals.getSession();

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const conference = (await getSubmittedConference(event.params.id, session!.user!.email!))!;

		if (conference.archivedAt != undefined) {
			conference.archivedAt = undefined;
		} else {
			conference.archivedAt = new Date();
		}

		// Apparently the mongo driver types dont accept objectIds in queries
		// but this works, we just have to cast it to any to tell typescript not to worry.
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		await replaceConference(event.params.id, session!.user!.email!, conference);

        return {
            result: event.params.id
        }
	},
	// Delete's are soft
	delete: async (event: RequestEvent) => {
        const session = await event.locals.getSession();

		const conference = (await getSubmittedConference(event.params.id, session!.user!.email!))!;

		if (conference.deletedAt != undefined) {
			conference.deletedAt = undefined;
		} else {
			conference.deletedAt = new Date();
		}

		await replaceConference(event.params.id, session!.user!.email!, conference);

        return {
            result: event.params.id
        }
	}
};