<script lang="ts">
	export let color: string;
</script>

<span
	class={`bg-${color}-200 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${color}-900 dark:text-gray-300`}
>
	<slot />
</span>
