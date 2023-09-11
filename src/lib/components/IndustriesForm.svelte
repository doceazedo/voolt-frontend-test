<script>
	import IndustriesSuggestions from './IndustriesSuggestions.svelte';
	import IndustriesSearch from './IndustriesSearch.svelte';
</script>

<div class="form">
	<h1 class="title">What type of business is the website for?</h1>
	<IndustriesSearch />
	<IndustriesSuggestions />
</div>

<style>
	.form {
		width: 100%;
	}

	.title {
		max-width: 26.25rem;
		margin-bottom: 2.5rem;
		font-size: 2rem;
		font-weight: 700;
		line-height: 42px;
	}
</style>
