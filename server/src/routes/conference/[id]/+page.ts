/** @type {import('./$types').PageLoad} */
export function load() {
	return {
			date: new Date(),
			name: 'My Conference',
			theme: 'Svelte',
			location: 'New York City, baby',
			paid: false
		};
}