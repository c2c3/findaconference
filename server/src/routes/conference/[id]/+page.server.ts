import { getById } from "$db/conferences";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({params}) => {
	// Apparently the mongo driver types dont accept objectIds in queries
	// but this works, we just have to cast it to any to tell typescript not to worry.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const conference = await getById(params.id);

	if (conference == null) {
		throw redirect(307, "/not-found");
	}

	return {
		conference,
	}
}