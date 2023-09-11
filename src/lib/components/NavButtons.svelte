<script lang="ts">
	import { SELECTED_INDUSTRY } from '$lib/stores/industries';
	import { toast } from '$lib/utils/toast';
	import Button from './Button.svelte';
	import ChevronLeftIcon from './icons/ChevronLeftIcon.svelte';

	const onContinue = () => {
		toast.success('Thanks for trying this demo!');
	};

	const onBack = () => {
		toast.error("There's no going back...");
	};
</script>

<nav class="buttons">
	<Button on:click={onBack}>
		<ChevronLeftIcon />
		Back
	</Button>
	<Button on:click={onContinue} variant="primary" disabled={!$SELECTED_INDUSTRY}>Continue</Button>
</nav>

<style>
	.buttons {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
</style>
