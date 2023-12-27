import { type Conference, addConference } from "$db/conferences";
import type { RequestEvent } from "./$types";

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

        const insertedId = await addConference(conference);
        return {
            result: insertedId.toString()
        }
	}
};