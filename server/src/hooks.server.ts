import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import {GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, AUTH_SECRET} from "$env/static/private";

export const handle = SvelteKitAuth({
  providers: [GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET })],
  trustHost: true,
  secret: AUTH_SECRET
})