<script lang="ts">
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

<style>
	.section {
		display: flex;
		height: 100svh;
	}

	.highlight {
		max-width: 52.5rem;
		width: 100%;
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
		max-width: 40rem;
		width: 100%;
		height: 100%;
		padding: 2.25rem 0 5rem;
	}
</style>
