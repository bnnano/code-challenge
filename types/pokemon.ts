import { NamedResource } from "./common";

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
    move: NamedResource
}

export interface PokemonStat {
    stat: NamedResource;
    effort: number;
    base_stat: number;
}

export interface PokemonType {
    slot: number;
    type: NamedResource
}