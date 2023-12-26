<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;

	export let data;
	const lastKnownDate = `${data.conference.date.getFullYear()}-${data.conference.date.getMonth()}-${data.conference.date.getDate()}`;
</script>

<article class="w-full h-full">
	<div class="text-left h-full">
		<h1 class="text-[32px] px-6 py-5 bg-yellow-200 border-b-2 border-black">Edit Conference</h1>
		<div class="px-6 py-5">
			{#if form?.result}
				<!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
				<a
					class="h-12 border-black border-2 p-2.5 bg-yellow-200 hover:bg-yellow-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-yellow-400"
					href={`/conference/${form.result}`}
					>Successfully update this conference! Click here to go to conference details!</a
				>
			{/if}
			<form method="POST" action="?/update">
				<label class="text-base mt-4 block" for="conference_name">Conference Name</label>
				<input
					type="text"
					required
					id="conference_name"
					name="conference_name"
					value={data.conference.name}
					class="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
					placeholder="MidWest Svelte Fest"
				/>

				<label class="text-base mt-4 block" for="conference_date">Conference Date</label>
				<input
					type="date"
					required
					id="conference_date"
					name="conference_date"
					value={lastKnownDate}
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
					value={data.conference.theme}
					class="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
					placeholder="you@example.com"
				/>

				<label class="text-base mt-4 block" for="conference_location">Location</label>
				<input
					type="text"
					required
					name="conference_location"
					id="conference_location"
					value={data.conference.location}
					class="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
					placeholder="you@example.com"
				/>

				<label class="text-base mt-4 block" for="conference_link">Website</label>
				<input
					type="text"
					required
					name="conference_link"
					id="conference_link"
					value={data.conference.link || ''}
					class="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
					placeholder="https://www.conference.com"
				/>

				<label class="text-base mt-4 block" for="conference_free">Free?</label>
				<input
					id="conference_free"
					name="conference_free"
					type="checkbox"
					value={!data.conference.paid}
					class="relative text-center cursor-pointer m-auto w-5 h-5"
					placeholder="you@example.com"
				/>

				<div class="block mt-4">
					<input
						type="submit"
						value="Submit"
						class="h-12 border-black border-2 p-2.5 bg-teal-200 hover:bg-teal-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-teal-400 mb-2 cursor-pointer"
					/>
				</div>
			</form>
			<div>
				<p class="text-xl border-t-2 my-4 pt-4">Archive or Delete</p>
				<form method="POST" action="?/toggleArchive">
					<input
						type="submit"
						value={`${
							data.conference.archivedAt == null
								? 'Archive this Conference'
								: 'Unarchive this Conference'
						}`}
						class="h-12 border-black border-2 p-2.5 bg-orange-200 hover:bg-orange-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-orange-400 mb-2 cursor-pointer"
					/>
				</form>
				<form method="POST" action="?/delete">
					<input
						type="submit"
						value="Delete"
						class="h-12 border-black border-2 p-2.5 bg-red-200 hover:bg-red-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-400 cursor-pointer"
					/>
				</form>
			</div>
		</div>
	</div>
</article>
