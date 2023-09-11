import frenchToast from 'svelte-french-toast';

const DEFAULT_DURATION = 5000;

export const toast = {
	error: (message: string, duration = DEFAULT_DURATION) =>
		frenchToast.error(message, {
			duration,
			style: 'background-color: #dc2626; color: #fff;',
			iconTheme: {
				primary: '#fff',
				secondary: '#dc2626'
			}
		}),
	success: (message: string, duration = DEFAULT_DURATION) =>
		frenchToast.success(message, {
			duration,
			style: 'background-color: #22c55e; color: #fff;',
			iconTheme: {
				primary: '#fff',
				secondary: '#22c55e'
			}
		})
};
