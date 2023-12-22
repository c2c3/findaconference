<script lang="ts">
	interface Conference {
		date: Date;
		name: string;
		theme: string;
		location: string;
		paid: boolean;
	}
	export let conferences: Conference[];
	const formatter = new Intl.DateTimeFormat('en-US');
</script>

<table
	class="relative overflow-x-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
>
	<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
		<tr>
			<th scope="col" class="px-6 py-3">Date</th>
			<th scope="col" class="px-6 py-3">Name</th>
			<th scope="col" class="px-6 py-3">Theme</th>
			<th scope="col" class="px-6 py-3">Location</th>
			<th scope="col" class="px-6 py-3">Paid/Free</th>
		</tr>
	</thead>
	<tbody>
		{#each conferences as conference, i}
			<tr>
				<td class="px-6 py-3">
					<a href="/conference/1">{formatter.format(conference.date)}</a>
				</td>
				<td class="px-6 py-3">
                    <a href="/conference/1">{conference.name}</a>
                </td>
				<td class="px-6 py-3">{conference.theme}</td>
				<td class="px-6 py-3">{conference.location}</td>
				<td class="px-6 py-3">{conference.paid ? 'Paid' : 'Free'}</td>
			</tr>
		{/each}
	</tbody>
</table>
