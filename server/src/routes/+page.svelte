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

<h1>Find a conference!</h1>

<button disabled={$page.data.session == null}>Add a conference</button>
<ConferenceList {conferences}></ConferenceList>

<style>
	button {
		display: inline-block;
		width: 300px;
	}
</style>
