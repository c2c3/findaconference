<script lang="ts">
	import { page } from '$app/stores';
	import ConferenceList from '$lib/components/conference-list.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const isSignedIn = $page.data.session != null;
</script>

<div class="flex">
	<h1 class="flex-1 text-[32px] mb-4">Conference List</h1>

	<div class="flex-1 flex flex-row-reverse">
		<div class="group flex relative">
			<a
				href={!isSignedIn ? '#' : '/conference'}
				class={'flex-initial h-12 border-black border-2 p-2.5 mb-2.5 ' +
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
<ConferenceList prepath="/submissions" showStatus conferences={data.conferences}></ConferenceList>

<style>
</style>
