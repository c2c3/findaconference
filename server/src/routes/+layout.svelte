<script>
	import '@picocss/pico';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<div>
	<main>
		<nav>
			<ul>
				<li><strong>Find A Conference</strong></li>
			</ul>
			<ul>
				<li>
					{#if $page.data.session == null}
						<button class="contrast" on:click={() => signIn('github')}>Login with Github</button>
					{:else}
						<button class="contrast" on:click={() => signOut()}>Sign Out</button>
					{/if}
				</li>
			</ul>
		</nav>
		<slot />
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
