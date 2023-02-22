import { NamedResource } from '@/types/common';
import {
    Pokemon,
    PokemonListResponse,
    PokemonSpecies,
    PokemonSummary,
    PokemonType,
} from '@/types/pokemon';
import { getMaxChunks, getNextChunk } from '@/utils/pokemon-chunks';

export const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
export const IMAGE_BASE_URL =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
export const WIKI_URL = 'https://bulbapedia.bulbagarden.net/wiki';

export async function getPokemonChunk(offset: number = 0, limit: number = 12) {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
            offset * limit
        }`
    );
    const data = await response.json();
    const maxNumberOfChunks = getMaxChunks(data.count, limit);
    const nextChunk = getNextChunk(offset, maxNumberOfChunks);

    const individualPokemonRequests =
        data?.results?.map?.(getPokemonDataSummary) ?? [];
    const pokemon = await Promise.all(individualPokemonRequests);

    return {
        nextChunk,
        pokemon,
    };
}

export async function getPokemonDataSummary(
    pokemonNamedResource: NamedResource
): Promise<PokemonSummary> {
    const response = await fetch(pokemonNamedResource.url);
    if (!response.ok)
        throw new Error('Could not find Pokémon data for given name');
    const pokemonData = await response.json();
    const speciesResponse = await fetch(pokemonData.species.url);
    if (!speciesResponse.ok)
        throw new Error('Could not find Pokémon species data for given name');
    const speciesData = await speciesResponse.json();
    return {
        id: pokemonData.id,
        name: pokemonData.name,
        types: extractPokemonTypeNames(pokemonData.types),
        description: extractPokemonLatestEnglishFlavorText(speciesData),
    };
}

export function extractPokemonTypeNames(types: PokemonType[]) {
    return types?.map?.((pokemonType) => pokemonType?.type?.name) ?? [];
}

export function extractPokemonLatestEnglishFlavorText(
    pokemonSpecies: PokemonSpecies
): string {
    const { flavor_text_entries } = pokemonSpecies ?? [];
    const englishFlavorTexts = flavor_text_entries.filter(
        (entry) => entry.language.name === 'en'
    );
    const { flavor_text } =
        englishFlavorTexts?.[englishFlavorTexts.length - 1] ?? '';
    return flavor_text;
}

export async function getAllPokemonNamedResources(): Promise<PokemonListResponse> {
    const countResponse = await fetch(BASE_URL);
    const { count } = await countResponse.json();
    const response = await fetch(`${BASE_URL}?limit=${count}`);
    return response.json();
}

export async function getPokemonByName(name: string): Promise<PokemonSummary> {
    const pokemonNamedResource: NamedResource = {
        name,
        url: `${BASE_URL}/${name}`,
    };
    return getPokemonDataSummary(pokemonNamedResource);
}
