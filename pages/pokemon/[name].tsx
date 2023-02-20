import Image from 'next/image';
import {
    IMAGE_BASE_URL,
    getAllPokemonNamedResources,
    getPokemonByName,
} from '../api/pokemon';
import { titleCase } from '@/utils/pokemon-names';
import { useQuery } from 'react-query';
import Typography from '@/components/atoms/Typography';
import { NamedResource } from '@/types/common';
import { PokemonSummary } from '@/types/pokemon';
import Stack from '@/components/layouts/Stack';
import PokemonType from '@/components/molecules/PokemonType';

export interface PokemonDetailPageProps {
    name: string;
}

export interface PageParams extends PokemonDetailPageProps {}

const PokemonDetailPage = (props: PokemonSummary) => {
    const { name } = props;
    const placeholderPokemonSummary = {
        id: 0,
        name,
        types: [],
        description: '',
    };
    const { data: pokemon } = useQuery(
        ['pokemon', name],
        async () => getPokemonByName(name),
        { initialData: placeholderPokemonSummary }
    );
    const imageUrl = `${IMAGE_BASE_URL}/${name}.jpg`;

    return (
        <div>
            <Image alt={name} src={imageUrl} width={200} height={200} />
            <Typography variant="header">{titleCase(name)}</Typography>
            <Stack>
                {pokemon?.types?.map?.((type: string) => (
                    <PokemonType key={type} type={type} />
                ))}
            </Stack>
        </div>
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
