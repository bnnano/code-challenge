import Image from 'next/image';
import {
    IMAGE_BASE_URL,
    WIKI_URL,
    getAllPokemonNamedResources,
    getPokemonByName,
} from '../api/pokemon';
import { titleCase } from '@/utils/pokemon-names';
import { useQuery } from 'react-query';
import Typography from '@/components/atoms/Typography';
import { NamedResource } from '@/types/common';
import { PokemonSummary } from '@/types/pokemon';
import Stack from '@/components/layouts/Stack';
import PokemonType, {
    PokemonTypeVariants,
} from '@/components/molecules/PokemonType';
import Grid from '@/components/layouts/Grid';
import Container from '@/components/layouts/Container';
import { styled } from '@/stitches.config';
import PageHeader from '@/components/organisms/PageHeader';

export interface PokemonDetailPageProps {
    name: string;
}

export interface PageParams extends PokemonDetailPageProps {}

const ImageContainer = styled(Stack, {
    position: 'relative',
    minWidth: '300px',
    maxWidth: '500px',
    height: '300px',
});

const FitImage = styled(Image, {
    objectFit: 'contain',
    paddingTop: '$4',
    paddingBottom: '$4',
    paddingLeft: '$8',
    paddingRight: '$8',
});

const StyledMain = styled('main', {
    height: '100%',
});

const PokemonDescription = styled(Typography, {
    minWidth: '300px',
    maxWidth: '600px',
});

const PokemonDetailPage = (props: Partial<PokemonSummary>) => {
    const { name = '' } = props;
    const placeholderPokemonSummary: PokemonSummary = {
        id: 0,
        name: name,
        types: [],
        description: '',
    };
    const { data: pokemon } = useQuery(
        ['pokemon', name],
        async () => getPokemonByName(name),
        { initialData: placeholderPokemonSummary }
    );
    const imageUrl = `${IMAGE_BASE_URL}/${pokemon?.id}.png`;
    const wikiUrl = `${WIKI_URL}/${pokemon?.name}`;

    return (
        <StyledMain>
            <PageHeader title="Bannano Frontend Challenge" />
            <Container center fillHeight alignContent="spaceBetween">
                <Grid columns="1" center gap="8">
                    <Grid columns="1" center gap="1" justifyItems="center">
                        <ImageContainer>
                            <FitImage fill alt={name} src={imageUrl} />
                        </ImageContainer>
                        <Typography variant="pageHeader" textAlign="center">
                            {titleCase(name)}
                        </Typography>
                        <Stack gap="1">
                            {pokemon?.types?.map?.((type) => (
                                <PokemonType key={type} type={type}>
                                    {type?.toUpperCase?.()}
                                </PokemonType>
                            ))}
                        </Stack>
                    </Grid>

                    <PokemonDescription textAlign="center">
                        {pokemon?.description}
                    </PokemonDescription>
                    <a href={wikiUrl} rel="noreferrer" target="_blank">
                        <Typography variant="link" textAlign="center">
                            Wiki Page →
                        </Typography>
                    </a>
                </Grid>
            </Container>
        </StyledMain>
    );
};

export async function getStaticPaths() {
    const allPokemon = await getAllPokemonNamedResources();
    return {
        paths: allPokemon.results.map((pokemon: NamedResource) => {
            const { name } = pokemon;
            return {
                params: {
                    name,
                },
            };
        }),
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: PageParams }) {
    const { name } = params;

    return {
        props: { name },
    };
}

export default PokemonDetailPage;
