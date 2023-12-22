<script>
	import '../app.css';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<div>
	<main>
		<nav class="flex mb-4">
			<ul class="flex-1">
				<li><strong>Find A Conference</strong></li>
			</ul>
			<ul class="flex-initial">
				<li>
					{#if $page.data.session == null}
						<button class="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]" on:click={() => signIn('github')}>Login with Github</button>
					{:else}
						<button class="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]" on:click={() => signOut()}>Sign Out</button>
					{/if}
				</li>
			</ul>
		</nav>
        <section class="h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white px-6 py-5 text-left h-full">
		    <slot />
        </section>
	</main>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		flex-direction: row;
	}
	main {
		flex: 4;
		max-width: 1500px;
		padding: 2rem;
	}
</style>
