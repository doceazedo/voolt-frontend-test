<script lang="ts">
	import SearchFastIcon from './icons/SearchFastIcon.svelte';
</script>

<div class="empty-results">
	<span class="icon">
		<SearchFastIcon />
	</span>
	<p class="text">
		Oops... We can't find similar service in our list. Try another keyword to search
	</p>
</div>

<style>
	.empty-results {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
		width: 100%;
		height: 100%;
		padding: 2.5rem;
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 3rem;
		background-color: var(--grey-20);
		border-radius: 50%;
	}

	.icon :global(svg) {
		width: 1.75rem;
		height: 1.75rem;
	}

	.text {
		text-align: center;
		color: var(--grey-90);
		line-height: 1.5rem;
		max-width: 22.5rem;
	}
</style>
