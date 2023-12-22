<script lang="ts">
    export let data;
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: "utc"
    });

</script>

<article class="w-full h-full">
	<div class="px-6 py-5 text-left h-full">
		<h1 class="text-[32px] mb-4">Conference Details</h1>
		<p class="text-base mt-4 block">Conference Name</p>
        <p class="text-2xl block">{data.conference.name}</p>
		<p class="text-base mt-4 block">Conference Date</p>
        <p class="text-2xl block">{formatter.format(data.conference.date)}</p>
		<p class="text-base mt-4 block">Conference Theme</p>
        <p class="text-2xl block">{data.conference.theme}</p>
        <p class="text-base mt-4 block">Website</p>
        <a class="text-2xl block" href={data.conference.link}>{data.conference.link}</a>
		<p class="text-base mt-4 block">Location</p>
        <p class="text-2xl block">{data.conference.location}</p>
		<p class="text-base mt-4 block">Free?</p>
		<p class="text-2xl block">{data.conference.paid ? "No" : "Yes"}</p>
	</div>
</article>
