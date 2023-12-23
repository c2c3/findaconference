import { SvelteKitAuth } from '@auth/sveltekit';
import { skipCSRFCheck } from '@auth/core';
import GitHub from '@auth/sveltekit/providers/github';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, AUTH_SECRET } from '$env/static/private';
import { redirect, type Handle, type RequestEvent, type MaybePromise } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { startMongo } from '$db/mongo';

// TODO: move this too a hook?
startMongo().then(() => console.log("Mongo Started"));

async function authorization({
	event,
	resolve
}: {
	event: RequestEvent;
	resolve: (requestEvent: RequestEvent) => MaybePromise<Response>;
}) {
	// Protect any routes under /authenticated
	if (event.url.pathname == ('/conference' || event.url.pathname.startsWith("/submissions"))) {
		const session = await event.locals.getSession();
		if (!session) {
			throw redirect(303, '/auth/signin');
		}
	}

	// If the request is still here, just proceed as normally
	return resolve(event);
}

export const handle: Handle = sequence(
	SvelteKitAuth({
		providers: [
			GitHub({
				clientId: GITHUB_CLIENT_ID,
				clientSecret: GITHUB_CLIENT_SECRET
			})
		],
        skipCSRFCheck: skipCSRFCheck,
		trustHost: true,
		secret: AUTH_SECRET,
	}),
	authorization
);
