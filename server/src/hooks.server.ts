import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import {GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, AUTH_SECRET} from "$env/static/private";

// Debugging
console.log("GCI", GITHUB_CLIENT_ID, "GCS", GITHUB_CLIENT_SECRET, "AS", AUTH_SECRET);

export const handle = SvelteKitAuth({
  providers: [GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET })],
  trustHost: true,
  secret: AUTH_SECRET
})