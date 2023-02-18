import { Pokemon } from '@/types/pokemon';
import SearchableContent from './SearchableContent';
import Card, { CardProps } from '../molecules/Card';
import { IMAGE_BASE_URL, getAllPokemon } from '@/pages/api/pokemon';
import Link from 'next/link';
import Typography from '../atoms/Typography';
import Grid from '../layouts/Grid';
import { useInfiniteQuery } from 'react-query';
import { titleCase } from '@/utils/pokemon-names';

const mapPokemonDataToCardData = (pokemon: Pokemon): CardProps => {
    const displayName = titleCase(pokemon.name);

    const imageProps = {
        alt: pokemon.name,
        src: `${IMAGE_BASE_URL}/${pokemon.name}.jpg`,
        width: 100,
        height: 100,
    };
    const pokemonDetailUrl = `/pokemon/${pokemon.name}`;
    const actionSection = (
        <Link href={pokemonDetailUrl}>
            <Typography variant="link">Details</Typography>
        </Link>
    );
    return {
        id: pokemon?.id?.toString?.() ?? pokemon.name ?? Date.now(),
        imageProps,
        title: displayName,
        actionSection,
    };
};

const PokemonList = () => {
    const { data } = useInfiniteQuery({
        queryKey: ['pokemon'],
        queryFn: async ({ pageParam = 0 }) => {
            const pokemon = await getAllPokemon(pageParam);
            return pokemon;
        },
        getNextPageParam: (lastPage, pages) => {
            return pages.length + 1;
        },
    });

    return (
        <SearchableContent>
            {data?.pages.map((pokemon, index) => {
                return (
                    <Grid key={`page${index}`}>
                        {pokemon
                            .map(mapPokemonDataToCardData)
                            .map((cardData: CardProps) => (
                                <Card key={cardData.id} {...cardData} />
                            ))}
                    </Grid>
                );
            })}
        </SearchableContent>
    );
};

export default PokemonList;