import { writable } from 'svelte/store';
import { toast } from '$lib/utils/toast';

type IndustriesResponse = {
	id: number;
	name: string;
	type: string;
	synonyms: string[];
	services: Service[];
	wpId: number;
	isPopular: boolean | null;
	mostCommonServices: number[];
}[];

type Service = {
	id: number;
	name: string;
};

const getIndustries = async () => {
	try {
		const resp = await fetch('https://dev-api.voolt.com/api/cms/industries');
		if (!resp.ok) throw Error(`${resp.status} ${resp.statusText}`);
		const data = await resp.json();
		INDUSTRIES.set(data);
	} catch (error: any) {
		// if the API error messages are known, we could use them here
		// for now, let's just show a nice message and  print the error
		toast.error('Oops... Something went wrong! Please try again later.');
		console.error(error);
	}
};

export const INDUSTRIES = writable<IndustriesResponse>(undefined, () => {
	getIndustries();
});

export const SELECTED_INDUSTRY = writable(0);
