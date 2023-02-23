import { PokemonSummary } from '@/types/pokemon';
import Stack from '../layouts/Stack';
import { useQuery } from 'react-query';
import { mapPokemonDataToCardData } from './PokemonList';
import { getPokemonByName } from '@/pages/api/pokemon';
import Card from '../molecules/Card';
import Grid from '../layouts/Grid';

const SinglePokemon = (pokemon: Partial<PokemonSummary>) => {
    const placeholderPokemonSummary = {
        id: 0,
        name: pokemon.name ?? '',
        types: [],
        description: '',
    };
    const { name = '' } = pokemon;
    const { data: pokemonData } = useQuery(
        ['pokemon', name],
        async () => getPokemonByName(name.toLowerCase()),
        { initialData: placeholderPokemonSummary }
    );
    const cardProps = mapPokemonDataToCardData(pokemonData);
    return (
        <Grid>
            <Card {...cardProps} />
        </Grid>
    );
};
export default SinglePokemon;
