<script lang="ts">
	import { Toaster } from 'svelte-french-toast';
	import '$lib/css/minireset.min.css';
	import '$lib/css/global.css';
</script>

<div class="section">
	<aside class="highlight" />
	<main class="main">
		<div class="content">
			<slot />
		</div>
	</main>
</div>

<Toaster />

<style>
	.section {
		display: flex;
		height: 100svh;
	}

	.highlight {
		width: 50%;
		height: 100%;
		flex-shrink: 0;
		background-image: url('/images/app-demo.webp');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.main {
		display: flex;
		justify-content: center;
		flex-grow: 1;
	}

	.main .content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		max-width: 40rem;
		width: 100%;
		height: 100%;
		padding: 2.25rem 0 5rem;
	}

	@media screen and (max-width: 1366px) {
		.highlight {
			width: unset;
			flex-grow: 1;
		}

		.main {
			width: min-content;
			flex-shrink: 0;
			padding: 2.25rem;
		}

		.main .content {
			padding: 2.25rem 0;
		}
	}

	@media screen and (max-width: 768px) {
		.section {
			height: unset;
		}

		.highlight {
			display: none;
		}

		.main {
			padding: 1.5rem;
		}

		.main .content {
			padding: 0;
			gap: 1.5rem;
		}
	}
</style>
