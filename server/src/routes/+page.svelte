<script lang="ts">
	import { page } from '$app/stores';
	import ConferenceList from '$lib/components/conference-list.svelte';

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

<div class="flex">
    <h1 class="flex-1 text-[32px] mb-4">Find a conference!</h1>

<button
	class="flex-initial h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] mb-2.5"
	disabled={$page.data.session == null}>Add a conference</button
>
</div>
<ConferenceList {conferences}></ConferenceList>

<style>
</style>
