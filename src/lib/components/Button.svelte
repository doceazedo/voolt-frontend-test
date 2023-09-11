<script lang="ts">
	export let variant: 'primary' | null = null;
	export let disabled = false;
</script>

<button class="button" class:is-primary={variant == 'primary'} {disabled}>
	<slot />
</button>

<style>
	.button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem;
		margin: 0;
		font-size: 0.875rem;
		font-weight: 500;
		background-color: var(--white);
		border: 1px solid var(--grey-30);
		border-radius: 0.25rem;
	}

	.button:not(:disabled) {
		cursor: pointer;
	}

	.button.is-primary {
		padding: 0.75rem 4rem;
		font-size: 1rem;
		background-color: var(--blue-primary);
		border-color: var(--blue-primary);
		color: var(--white);
	}

	.button.is-primary:disabled {
		background-color: var(--grey-30);
		border-color: var(--grey-30);
		color: var(--grey-60);
	}

	.button :global(svg) {
		width: 1.25rem;
		height: 1.25rem;
	}

	.button :global(svg:first-child) {
		margin-left: -0.25rem;
	}
</style>
