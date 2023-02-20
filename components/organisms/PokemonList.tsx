import { PokemonSummary } from '@/types/pokemon';
import SearchableContent from './SearchableContent';
import Card, { CardProps } from '../molecules/Card';
import { IMAGE_BASE_URL, WIKI_URL, getPokemonChunk } from '@/pages/api/pokemon';
import Typography from '../atoms/Typography';
import Grid from '../layouts/Grid';
import { useInfiniteQuery } from 'react-query';
import { titleCase } from '@/utils/pokemon-names';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const mapPokemonDataToCardData = (pokemon: PokemonSummary): CardProps => {
    const displayName = titleCase(pokemon.name);

    const imageProps = {
        alt: pokemon.name,
        src: `${IMAGE_BASE_URL}/${pokemon.name}.jpg`,
        width: 100,
        height: 100,
    };
    const pokemonDetailUrl = `${WIKI_URL}/${pokemon.name}`;
    const actionSection = (
        <a href={pokemonDetailUrl} rel="noreferrer" target="_blank">
            <Typography variant="link">Details</Typography>
        </a>
    );
    return {
        id: pokemon?.id?.toString?.() ?? pokemon.name ?? Date.now(),
        imageProps,
        title: displayName,
        description: pokemon.description,
        actionSection,
    };
};

const PokemonList = () => {
    const { ref, inView } = useInView();

    const { data, fetchNextPage } = useInfiniteQuery({
        queryKey: ['pokemon'],
        queryFn: async ({ pageParam = 0 }) => {
            return getPokemonChunk(pageParam);
        },
        getNextPageParam: (lastPage) => {
            return lastPage.nextChunk;
        },
    });

    useEffect(() => {
        fetchNextPage();
    }, [inView, fetchNextPage]);

    return (
        <SearchableContent>
            {data?.pages.map((pokemonChunk, index) => {
                return (
                    <Grid key={`page${index}`}>
                        {pokemonChunk.pokemon
                            .map(mapPokemonDataToCardData)
                            .map((cardData: CardProps) => (
                                <Card key={cardData.id} {...cardData} />
                            ))}
                    </Grid>
                );
            })}
            <div ref={ref}>Load More</div>
        </SearchableContent>
    );
};

export default PokemonList;
