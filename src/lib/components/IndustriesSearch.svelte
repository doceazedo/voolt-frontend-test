<script lang="ts">
	import { INDUSTRIES } from '$lib/stores/industries';
	import SearchInput from './SearchInput.svelte';
	import type { Option } from '$lib/types';

	let options = new Set<Option>();

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
</script>

<SearchInput
	{options}
	placeholder="Search for your industry"
	on:change={(ev) => console.log(ev.detail.value)}
/>
