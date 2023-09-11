<script lang="ts">
	import { INDUSTRIES, SELECTED_INDUSTRY } from '$lib/stores/industries';
	import SearchInput from './SearchInput.svelte';
	import type { Option } from '$lib/types';

	let options = new Set<Option>();
	let query = '';
	let value = 0;

	const onPickIndustry = (event: CustomEvent<{ value: number }>) => {
		$SELECTED_INDUSTRY = event.detail.value;
	};

	const unpickIndustry = () => {
		if (!$SELECTED_INDUSTRY) return;
		if ($INDUSTRIES.find((x) => x.id == $SELECTED_INDUSTRY)?.name != query) {
			$SELECTED_INDUSTRY = 0;
		}
	};
	$: query, unpickIndustry();

	INDUSTRIES.subscribe((industries) => {
		if (!industries) return;
		industries.forEach((industry) => {
			const label = industry.name;
			const synonyms = industry.synonyms.map((synonym) => synonym.toLowerCase());
			const services = industry.services.map((service) => service.name.toLowerCase());

			// add industry and its synonyms/services as searchable items
			options.add({ value: industry.id, label, searchableAs: label.toLowerCase() });
			synonyms.forEach((searchableAs) => options.add({ value: industry.id, label, searchableAs }));
			services.forEach((searchableAs) => options.add({ value: industry.id, label, searchableAs }));
		});
		options = options;
	});

	SELECTED_INDUSTRY.subscribe((selectedIndustry) => {
		if (!selectedIndustry) return;
		query = $INDUSTRIES.find((x) => x.id == selectedIndustry)?.name || query;
	});
</script>

<SearchInput
	{options}
	bind:inputValue={query}
	bind:selected={value}
	placeholder="Search for your industry"
	on:change={onPickIndustry}
/>
