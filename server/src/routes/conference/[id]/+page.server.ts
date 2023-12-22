import { conferences } from "$db/conferences";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { ObjectId } from 'mongodb';

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({params}) => {
	// Apparently the mongo driver types dont accept objectIds in queries
	// but this works, we just have to cast it to any to tell typescript not to worry.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const conference = await conferences.findOne({_id: new ObjectId(params.id) as any});

	if (conference == null) {
		throw redirect(307, "/not-found");
	}

	conference._id = conference._id.toString();

	return {
		conference,
	}
}