<script lang="ts">
	import { page } from '$app/stores';
	import ConferenceList from '$lib/components/conference-list.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let filter: string | undefined;
	$: filtered = data.conferences.filter((e) => {
		const f = filter;
		if (f == undefined) {
			return true;
		}
		const indexes = [e.name, e.theme, e.location];
		return indexes.some((e) => e.includes(f));
	});

	const isSignedIn = $page.data.session != null;
</script>

<div class="flex px-6 py-5 bg-yellow-200 border-b-2 border-black">
	<h1 class="flex-1 text-[32px]">Conference List</h1>

	<div class="flex-1 flex flex-row-reverse">
		<div class="group flex relative">
			<a
				href={!isSignedIn ? '#' : '/conference'}
				class={'flex-initial h-12 border-black border-2 p-2.5 ' +
					(!isSignedIn
						? 'bg-gray-300 cursor-not-allowed'
						: 'bg-teal-200 hover:bg-teal-300 active:bg-teal-400 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]')}
				>Add a conference</a
			>
			{#if !isSignedIn}
				<span
					class="z-50 group-hover:opacity-100 text-center transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2
            -translate-x-1/2 translate-y-1/4 opacity-0 m-4 p-4 mx-auto"
					style="width: 150px">Login or Signup to add a conference</span
				>
			{/if}
		</div>
	</div>
</div>
<div class="px-6 py-5">
	<input
		type="search"
		bind:value={filter}
		placeholder="Filter"
		class="w-96 border-black bg-pink-200 border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-pink-300 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-4 placeholder:text-gray-800"
	/>
	<ConferenceList conferences={filtered}></ConferenceList>
</div>

<svelte:head>
	<title>Conference List - Find a Conference</title>
	<meta name="description" content="Find a conference to attend today!" />
</svelte:head>
