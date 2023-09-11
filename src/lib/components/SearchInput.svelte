<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ChevronDownIcon from './icons/ChevronDownIcon.svelte';
	import SearchIcon from './icons/SearchIcon.svelte';
	import type { Option } from '$lib/types';
	import EmptyResults from './EmptyResults.svelte';

	const dispatch = createEventDispatcher();

	export let inputValue: string = '';
	export let selected = 0;
	export let options: Set<Option> = new Set();
	export let placeholder = '';

	$: optionsMap =
		options &&
		new Map(
			[...options].sort((a, b) => a.label.localeCompare(b.label)).map((x) => [x.value, x.label])
		);
	$: results = options && search(inputValue);

	let showResults = false;

	const search = (query: string) => {
		if (!query.length) return optionsMap;

		let matches = new Map<number, string>();
		query = query.toLowerCase();
		options.forEach((option) => {
			if (option.searchableAs.includes(query)) {
				matches.set(option.value, option.label);
			}
		});

		const sortedMatches = [...matches.entries()].sort((a, b) => {
			const aValue = a[1].toLowerCase();
			const bValue = b[1].toLowerCase();

			if (aValue.startsWith(query) && !bValue.startsWith(query)) {
				return -1;
			} else if (!aValue.startsWith(query) && bValue.startsWith(query)) {
				return 1;
			}

			return aValue.localeCompare(bValue);
		});
		return new Map(sortedMatches);
	};

	const pickItem = (value: number, label: string) => {
		selected = value;
		inputValue = label;
		showResults = false;

		dispatch('change', {
			value
		});
	};
</script>

<div
	class="search-input"
	on:focusin={() => (showResults = true)}
	on:focusout={() => (showResults = false)}
>
	<span class="icon is-left">
		<SearchIcon />
	</span>

	<input type="text" {placeholder} bind:value={inputValue} />

	<span class="icon is-right">
		<ChevronDownIcon />
	</span>

	<div class="search-results" class:show={showResults}>
		<div class="options">
			{#each results as [value, label]}
				<button class="option" on:click={() => pickItem(value, label)}>
					{label}
				</button>
			{/each}
			{#if !results.size}
				<EmptyResults />
			{/if}
		</div>
	</div>
</div>

<style>
	.search-input {
		position: relative;
		margin-bottom: 2.5rem;
	}

	.search-input,
	input {
		width: 100%;
		transition: all 0.2s ease;
	}

	input {
		border: 1px solid var(--grey-40);
		border-radius: 0.25rem;
		padding: 10px 52px 10px 48px;
	}

	input::placeholder {
		color: var(--grey-60);
	}

	input:focus {
		border-color: var(--blue-primary);
		box-shadow: 0 0 0 2px hsla(220, 87%, 94%, 1);
		outline: none;
	}

	.icon {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 100%;
		pointer-events: none;
	}

	.icon.is-left {
		top: 0;
		left: 0;
	}

	.icon.is-right {
		top: 0;
		right: 0;
	}

	.icon :global(svg) {
		width: 1.25rem;
		height: 1.25rem;
	}

	.search-results {
		position: absolute;
		top: 50px;
		left: 0;
		width: 100%;
		padding: 0.25rem;
		background-color: #fff;
		border-radius: 0.25rem;
		border: 1px solid var(--grey-30);
		box-shadow: -10px 4px 24px 0px hsla(0, 0%, 0%, 0.08);
		transform-origin: top center;
		transition: all 0.2s ease;
	}

	.search-results:not(.show) {
		opacity: 0;
		transform: translateY(-8px) scale(0.9);
		pointer-events: none;
	}

	.options {
		display: flex;
		flex-direction: column;
		gap: 2px;
		width: 100%;
		max-height: 15.25rem;
		height: max-content;
		padding-right: 0.25rem;
		overflow-y: scroll;
	}

	/* width */
	.options::-webkit-scrollbar {
		width: 0.25rem;
	}

	/* Track */
	.options::-webkit-scrollbar-track {
		background: var(--white);
	}

	/* Handle */
	.options::-webkit-scrollbar-thumb {
		background: var(--grey-50);
		border-radius: 0.25rem;
	}

	/* Handle on hover */
	.options::-webkit-scrollbar-thumb:hover {
		background: var(--grey-60);
	}

	.option {
		text-align: left;
		font-size: 0.875rem;
		padding: 0.625rem 0.75rem;
		border: none;
		border-radius: 0.25rem;
		background-color: transparent;
		cursor: pointer;
	}

	.option:hover {
		background-color: var(--grey-10);
	}
</style>
