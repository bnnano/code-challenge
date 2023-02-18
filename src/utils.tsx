export const fetchPokemons = async (fetchUrl?: string) => {
	const url = fetchUrl ?? `https://pokeapi.co/api/v2/pokemon?limit=12`;
	const res = await fetch(url);
	return res.json();
};

export const fetchSearch = async (name: string) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const res = await fetch(url);
    return res.json();
};