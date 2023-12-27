import { getById } from "$db/conferences";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({params}) => {
	const conference = await getById(params.id);

	if (conference == null) {
		throw redirect(307, "/not-found");
	}

	return {
		conference,
	}
}