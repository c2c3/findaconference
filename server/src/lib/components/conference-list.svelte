<script lang="ts">
	import type { Conference } from "$db/conferences";
	import Badge from "./badge.svelte";

	export let conferences: Conference[];
	export let showStatus: boolean = false;
    export let prepath: string = "/conference";
	const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: "utc"
    });
</script>

<table
	class="relative overflow-x-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
>
	<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
		<tr>
			<th scope="col" class="px-6 py-3">Date</th>
			{#if showStatus}
				<th scope="col" class="px6 py3">Status</th>
			{/if}
			<th scope="col" class="px-6 py-3">Name</th>
			<th scope="col" class="px-6 py-3">Theme</th>
			<th scope="col" class="px-6 py-3">Location</th>
			<th scope="col" class="px-6 py-3">Paid/Free</th>
		</tr>
	</thead>
	<tbody>
		{#each conferences as conference, i}
			<tr>
				<td class="px-6 py-3 text-orange-400">
					<a href={`${prepath}/${conference._id}`}>{formatter.format(conference.date)}</a>
				</td>
				{#if showStatus}
					<td class="px6 py3">
						{#if conference.archivedAt != null}
						<Badge color="yellow">
							Archived
						</Badge>
						{/if}
					</td>
				{/if}
				<td class="px-6 py-3 text-orange-400">
                    <a href={`${prepath}/${conference._id}`}>{conference.name}</a>
                </td>
				<td class="px-6 py-3">{conference.theme}</td>
				<td class="px-6 py-3">{conference.location}</td>
				<td class="px-6 py-3">{conference.paid ? 'Paid' : 'Free'}</td>
			</tr>
		{/each}
	</tbody>
</table>
{#if conferences.length == 0}
	<div class="text-center p-8 text-lg">Nothing to see here! Why not add a conference?</div>
{/if}