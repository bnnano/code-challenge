import { NamedResource } from './common';

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    moves: PokemonMove[];
    stats: PokemonStat[];
    types: PokemonType[];
}

export interface PokemonMove {
    move: NamedResource;
}

export interface PokemonStat {
    stat: NamedResource;
    effort: number;
    base_stat: number;
}

export interface PokemonType {
    slot: number;
    type: NamedResource<
        | 'normal'
        | 'dark'
        | 'fire'
        | 'water'
        | 'grass'
        | 'electric'
        | 'ice'
        | 'fighting'
        | 'poison'
        | 'ground'
        | 'flying'
        | 'psychic'
        | 'bug'
        | 'rock'
        | 'ghost'
        | 'dragon'
        | 'steel'
        | 'fairy'
        | undefined
    >;
}

export interface PokeminListResponse {
    results: NamedResource[];
}

export interface FlavorText {
    flavor_text: string;
    language: NamedResource;
}

export interface PokemonSpecies {
    flavor_text_entries: FlavorText[];
}

export interface PokemonSummary {
    id: number;
    name: string;
    types: Array<
        | 'normal'
        | 'dark'
        | 'fire'
        | 'water'
        | 'grass'
        | 'electric'
        | 'ice'
        | 'fighting'
        | 'poison'
        | 'ground'
        | 'flying'
        | 'psychic'
        | 'bug'
        | 'rock'
        | 'ghost'
        | 'dragon'
        | 'steel'
        | 'fairy'
        | undefined
    >;
    description: string;
}

export interface PokemonListResponse {
    count: number;
    results: NamedResource[];
}
