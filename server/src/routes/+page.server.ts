import { getActiveConferences } from '$db/conferences';
import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async () => {
	// TODO: Pagination!
	const conferences = await getActiveConferences();

	return {
		conferences: conferences
	};
};
