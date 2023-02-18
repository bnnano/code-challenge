import { NamedResource } from '@/types/common';
import { Pokemon } from '@/types/pokemon';

export const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
export const IMAGE_BASE_URL = 'https://img.pokemondb.net/artwork/large';
export const WIKI_URL = 'https://bulbapedia.bulbagarden.net/wiki';

export async function getAllPokemon(offset: number = 0, limit: number = 6) {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    const individualPokemonRequests =
        data?.results?.map?.(async (pokemonNamedResource: NamedResource) => {
            const response = await fetch(pokemonNamedResource.url);
            const pokemon = await response.json();
            return pokemon;
        }) ?? [];
    return Promise.all(individualPokemonRequests);
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
    const response = await fetch(`${BASE_URL}/${name}`);
    const data = await response.json();
    return data;
}
