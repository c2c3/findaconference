import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, AUTH_SECRET } from '$env/static/private';
import { redirect, type Handle, type RequestEvent, type MaybePromise } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

async function authorization({
	event,
	resolve
}: {
	event: RequestEvent;
	resolve: (requestEvent: RequestEvent) => MaybePromise<Response>;
}) {
	// Protect any routes under /authenticated
	if (event.url.pathname.startsWith('/authenticated')) {
		const session = await event.locals.getSession();
		if (!session) {
			throw redirect(303, '/auth');
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
		trustHost: true,
		secret: AUTH_SECRET
	}),
	authorization
);
