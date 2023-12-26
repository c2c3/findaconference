<script lang="ts">
	import { page } from '$app/stores';
	import type { ActionData } from './$types';

	/** @type {import('./$types').ActionData} */
	export let form: ActionData;
</script>

<article class="w-full h-full">
	<div class="text-left h-full">
		<h1 class="text-[32px] px-6 py-5 mb-4 bg-yellow-200 border-b-2 border-black">
			Add a Conference
		</h1>
		<div class="px-6 py-5">
			{#if form?.result}
				<!-- this message is ephemeral; it exists because the page was rendered in
				   response to a form submission. it will vanish if the user reloads -->
				<a
					class="h-12 border-black border-2 p-2.5 bg-yellow-200 hover:bg-yellow-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-yellow-400"
					href={`/conference/${form.result}`}
					>Successfully created a new conference! Click here to go to conference details!</a
				>
			{/if}
			<form method="POST">
				<label class="text-base mt-4 block" for="conference_name">Conference Name</label>
				<input
					type="text"
					required
					id="conference_name"
					name="conference_name"
					class="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
					placeholder="MidWest Svelte Fest"
				/>

				<label class="text-base mt-4 block" for="conference_date">Conference Date</label>
				<input
					type="date"
					required
					id="conference_date"
					name="conference_date"
					class="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
					placeholder="you@example.com"
				/>

				<label class="text-base mt-4 block" for="conference_theme"
					>Conference Theme (Marketing, ReactJS, Basket-Weaving)</label
				>
				<input
					id="conference_theme"
					required
					name="conference_theme"
					type="text"
					class="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
					placeholder="Svelte"
				/>

				<label class="text-base mt-4 block" for="conference_link">Website</label>
				<input
					id="conference_link"
					required
					name="conference_link"
					type="text"
					class="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
					placeholder="https://www.conference.com"
				/>

				<label class="text-base mt-4 block" for="conference_location">Location</label>
				<input
					type="text"
					required
					name="conference_location"
					id="conference_location"
					class="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
					placeholder="New York, USA"
				/>

				<label class="text-base mt-4 block" for="conference_free">Free?</label>
				<input
					id="conference_free"
					name="conference_free"
					type="checkbox"
					class="relative text-center cursor-pointer m-auto w-5 h-5"
				/>

				<div class="block mt-4">
					<input
						type="submit"
						value="Submit"
						class="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]"
					/>
				</div>
			</form>
		</div>
	</div>
</article>
