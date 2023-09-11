import { writable } from 'svelte/store';

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
	} catch (error) {
		// TODO: handle errors
	}
};

export const INDUSTRIES = writable<IndustriesResponse>(undefined, () => {
	getIndustries();
});

export const SELECTED_INDUSTRY = writable(0);
