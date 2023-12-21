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

<table>
	<thead>
		<tr>
			<th scope="col">Date</th>
			<th scope="col">Name</th>
			<th scope="col">Theme</th>
			<th scope="col">Location</th>
			<th scope="col">Paid/Free</th>
		</tr>
	</thead>
	<tbody>
		{#each conferences as conference, i}
			<tr>
				<td>{formatter.format(conference.date)}</td>
				<td>{conference.name}</td>
				<td>{conference.theme}</td>
				<td>{conference.location}</td>
				<td>{conference.paid ? "Paid" : "Free"}</td>
			</tr>
		{/each}
	</tbody>
</table>
