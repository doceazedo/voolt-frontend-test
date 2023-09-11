<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { INDUSTRIES, SELECTED_INDUSTRY } from '$lib/stores/industries';

	$: popularOptions = $INDUSTRIES?.filter((x) => x.isPopular) || [];

	const pickIndustry = (id: number) => ($SELECTED_INDUSTRY = id);
</script>

{#if popularOptions.length}
	<div class="suggestions" transition:slide={{ duration: 400, easing: quintOut }}>
		<h2 class="title">Or select from the most popular:</h2>
		<div class="options">
			{#each popularOptions as option}
				<button
					class="option"
					on:click={() => pickIndustry(option.id)}
					class:is-active={option.id == $SELECTED_INDUSTRY}
				>
					{option.name}
				</button>
			{/each}
		</div>
	</div>
{/if}

<style>
	.title {
		margin-bottom: 1.25rem;
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.25rem;
	}

	.options {
		display: flex;
		flex-wrap: wrap;
		gap: 8px 4px;
	}

	.option {
		padding: 0.25rem 1rem;
		margin: 0;
		font-size: 0.875rem;
		background-color: var(--white);
		border: 1px solid var(--grey-30);
		border-radius: 0.25rem;
		cursor: pointer;
	}

	.option.is-active {
		background-color: var(--blue-10);
		border-color: var(--blue-primary);
		color: var(--blue-primary);
	}
</style>
