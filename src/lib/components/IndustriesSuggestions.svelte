<script lang="ts">
	const placeholderOptions = [
		'Accounting',
		'Appliance Installation',
		'Architectural services',
		'Barber',
		'Bricklayer',
		'Electrician',
		'Event Planning',
		'Excavation Contractor',
		'Exterior Cleaner',
		'Car Detailing',
		'Carpenter',
		'BBQ Cleaning',
		'Flooring Contractor',
		'Food Services',
		'Foundation Contractor',
		'Garage Door Contractor',
		'General Contractor'
	];
</script>

<h2 class="title">Or select from the most popular:</h2>
<div class="options">
	{#each placeholderOptions as label, i}
		<button class="option" class:is-active={i == 9}>{label}</button>
	{/each}
</div>

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
