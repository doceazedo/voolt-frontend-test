<script lang="ts">
	import { SELECTED_INDUSTRY } from '$lib/stores/industries';
	import Button from './Button.svelte';
	import ChevronLeftIcon from './icons/ChevronLeftIcon.svelte';
</script>

<nav class="buttons">
	<Button>
		<ChevronLeftIcon />
		Back
	</Button>
	<Button variant="primary" disabled={!$SELECTED_INDUSTRY}>Continue</Button>
</nav>

<style>
	.buttons {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
</style>
