<script lang="ts">
	import { INDUSTRIES, SELECTED_INDUSTRY } from '$lib/stores/industries';
	import ChevronDownIcon from './icons/ChevronDownIcon.svelte';
	import SearchIcon from './icons/SearchIcon.svelte';

	type SearchableItem = {
		id: number;
		tag: string;
	};

	let value = '';
	let showResults = false;
	let searchableItems = new Set<SearchableItem>();

	const search = (query: string) => {
		if (!query.length) return new Set($INDUSTRIES?.map((x) => x.id) || []);

		let matches = new Set<number>();
		query = query.toLowerCase();
		searchableItems.forEach((item) => {
			if (item.tag.includes(query)) {
				matches.add(item.id);
			}
		});
		return matches;
	};

	const pickIndustry = (id: number) => {
		$SELECTED_INDUSTRY = id;
		showResults = false;
	};

	const unpickIndustry = () => {
		if (!$SELECTED_INDUSTRY) return;
		if (value != $INDUSTRIES.find((x) => x.id == $SELECTED_INDUSTRY)?.name) {
			$SELECTED_INDUSTRY = 0;
		}
	};

	// when INDUSTRIES is updated, set options
	INDUSTRIES.subscribe((industries) => {
		if (!industries) return;
		industries.forEach((industry) => {
			// searchable by industry name
			searchableItems.add({ id: industry.id, tag: industry.name.toLowerCase() });
			// searchable by synonyms
			industry.synonyms.forEach((synonym) => {
				searchableItems.add({ id: industry.id, tag: synonym.toLowerCase() });
			});
			// searchable by services
			industry.services.forEach((service) => {
				searchableItems.add({ id: industry.id, tag: service.name.toLowerCase() });
			});
		});
	});

	SELECTED_INDUSTRY.subscribe((selected) => {
		if (!$SELECTED_INDUSTRY) return;
		value = $INDUSTRIES?.find((x) => x.id == $SELECTED_INDUSTRY)?.name || '';
	});

	$: value, unpickIndustry();
</script>

<div
	class="search-input"
	on:focusin={() => (showResults = true)}
	on:focusout={() => (showResults = false)}
>
	<span class="icon is-left">
		<SearchIcon />
	</span>
	<input type="text" placeholder="Search for your industry" bind:value />
	<span class="icon is-right">
		<ChevronDownIcon />
	</span>

	<div class="search-results" class:show={showResults}>
		<div class="options">
			{#each search(value) as item}
				{@const industry = $INDUSTRIES.find((x) => x.id == item)}
				{#if industry}
					<button class="option" on:click={() => pickIndustry(industry.id)}>
						{industry.name}
					</button>
				{/if}
			{/each}
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
		height: 16rem;
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
		height: 100%;
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
