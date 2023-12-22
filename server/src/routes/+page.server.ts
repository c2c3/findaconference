import { conferences, type Conference } from '$db/conferences';
import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async () => {
	// TODO: Pagination!
	const cursor = conferences.find();
	const items: Conference[] = [];
	for await (const doc of cursor) {
		items.push({
            name: doc.name,
            _id: doc._id.toString(),
            date: doc.date,
            theme: doc.theme,
            paid: doc.paid,
            location: doc.location,
            link: doc.link,
            submittedBy: doc.submittedBy
        });
	}

	return {
		conferences: items
	};
};
