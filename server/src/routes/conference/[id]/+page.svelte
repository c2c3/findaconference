<script lang="ts">
	export let data;
	const formatter = new Intl.DateTimeFormat('en-US', {
		timeZone: 'utc'
	});
</script>

<article class="w-full h-full">
	<div class="text-left h-full">
		<h1 class="text-[32px] px-6 py-5 bg-yellow-200 border-b-2 border-black">
			Conference Details
		</h1>
		<div class="px-6 py-5">
			<p class="text-base mt-4 block">Conference Name</p>
			<p class="text-2xl block">{data.conference.name}</p>
			<p class="text-base mt-4 block">Conference Date</p>
			<p class="text-2xl block">{formatter.format(data.conference.date)}</p>
			<p class="text-base mt-4 block">Conference Theme</p>
			<p class="text-2xl block">{data.conference.theme}</p>
			<p class="text-base mt-4 block">Website</p>
			<a class="text-2xl block text-orange-400" href={data.conference.link}>{data.conference.link}</a>
			<p class="text-base mt-4 block">Location</p>
			<p class="text-2xl block">{data.conference.location}</p>
			<p class="text-base mt-4 block">Free?</p>
			<p class="text-2xl block">{data.conference.paid ? 'No' : 'Yes'}</p>
		</div>
	</div>
</article>

<svelte:head>
	<title>{data.conference.name} Conference Details - Find a Conference</title>
	<meta
		name="description"
		content={`${data.conference.name}: ${data.conference.location} starting on ${formatter.format(
			data.conference.date
		)}`}
	/>
</svelte:head>
