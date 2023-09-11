<script lang="ts">
	import ChevronDownIcon from './icons/ChevronDownIcon.svelte';
	import SearchIcon from './icons/SearchIcon.svelte';
</script>

<div class="search-input">
	<span class="icon is-left">
		<SearchIcon />
	</span>
	<input type="text" placeholder="Search for your industry" />
	<span class="icon is-right">
		<ChevronDownIcon />
	</span>
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
</style>
