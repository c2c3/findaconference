import { conferences, type Conference } from '$db/conferences';
import type { PageServerLoad, PageServerLoadEvent } from './$types';

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async (event: PageServerLoadEvent) => {
	// TODO: Pagination!
    const session = await event.locals.getSession();
	const cursor = conferences.find({
        submittedBy: session!.user!.email!,
        deletedAt: undefined
    });
	const items: Conference[] = [];
	for await (const doc of cursor) {
		items.push({
            name: doc.name,
            _id: doc._id.toString(),
            date: doc.date,
            theme: doc.theme,
            paid: doc.paid,
            link: doc.link,
            location: doc.location,
            submittedBy: doc.submittedBy,
            deletedAt: doc.deletedAt,
            archivedAt: doc.archivedAt
        });
	}

	return {
		conferences: items
	};
};
