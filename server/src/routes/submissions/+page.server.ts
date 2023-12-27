import { getSubmittedConferences } from '$db/conferences';
import type { PageServerLoad, PageServerLoadEvent } from './$types';

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async (event: PageServerLoadEvent) => {
	// TODO: Pagination!
    const session = await event.locals.getSession();
	const conferences = await getSubmittedConferences(session!.user!.email!);

	return {
		conferences: conferences
	};
};
