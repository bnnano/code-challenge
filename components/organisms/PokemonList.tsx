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
import Link from 'next/link';

export const mapPokemonDataToCardData = (
    pokemon: PokemonSummary | undefined
): CardProps => {
    if (!pokemon?.id) {
        const displayName = 'Pokémon Not Found';

        const imageProps = {
            alt: 'unownquestion',
            src: 'https://marriland.com/wp-content/plugins/marriland-core/images/pokemon/sprites/home/full/unown-question.png',
            fill: true,
            sizes: '(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw',
        };
        const actionSection = (
            <Typography variant="link">No Details</Typography>
        );
        return {
            id: Date.now().toString(),
            imageProps,
            title: displayName,
            description: 'Pokémon was not found for the given name',
            actionSection,
        };
    }

    const displayName = titleCase(pokemon.name);

    const imageProps = {
        alt: pokemon.name,
        src: `${IMAGE_BASE_URL}/${pokemon.id}.png`,
        fill: true,
    };
    const pokemonDetailUrl = `/pokemon/${pokemon.name}`;
    const actionSection = (
        <Link href={pokemonDetailUrl}>
            <Typography variant="link">Details →</Typography>
        </Link>
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
        <>
            {data?.pages.map((pokemonChunk, index) => {
                return (
                    <Grid center key={`page${index}`}>
                        {pokemonChunk.pokemon
                            .map(mapPokemonDataToCardData)
                            .map((cardData: CardProps) => (
                                <Card key={cardData.id} {...cardData} />
                            ))}
                    </Grid>
                );
            })}
            <Typography variant="link" ref={ref}>
                Loading...
            </Typography>
        </>
    );
};

export default PokemonList;
