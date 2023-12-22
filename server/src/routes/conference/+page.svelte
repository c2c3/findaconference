<script lang="ts">
	import { page } from '$app/stores';

	const conferences = [
		{
			date: new Date(),
			name: 'My Conference',
			theme: 'Svelte',
			location: 'New York City, baby',
			paid: false
		}
	];
</script>

<article class="w-full h-full">
	<div class="px-6 py-5 text-left h-full">
		<h1 class="text-[32px] mb-4">Add a Conference</h1>
		<label class="text-base mt-4 block" for="conference_name">Conference Name</label>
		<input
            id="conference_name"
			class="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
			placeholder="you@example.com"
		/>

		<label class="text-base mt-4 block" for="conference_date">Conference Date</label>
        <input
        id="conference_date"
			class="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
			placeholder="you@example.com"
		/>
		

		<label class="text-base mt-4 block" for="conference_time">Conference Theme (Marketing, ReactJS, Basket-Weaving)</label>
		<input
        id="conference_time"
			class="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
			placeholder="you@example.com"
		/>

		<label class="text-base mt-4 block" for="conference_location">Location</label>
		<input
        id="conference_location"
			class="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
			placeholder="you@example.com"
		/>

		<label class="text-base mt-4 block" for="conference_free">Free?</label>
		<input
            id="conference_free"
			class="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
			placeholder="you@example.com"
		/>

        <div class="block mt-4">
            <input type="submit"
        value="Submit"
        class="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]"
        />
        </div>
	</div>
</article>
