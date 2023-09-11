<script lang="ts">
	import Button from './Button.svelte';
	import ChevronLeftIcon from './icons/ChevronLeftIcon.svelte';
</script>

<nav class="buttons">
	<Button>
		<ChevronLeftIcon />
		Back
	</Button>
	<Button variant="primary">Continue</Button>
</nav>

<style>
	.buttons {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
</style>
