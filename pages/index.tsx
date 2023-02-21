import Head from 'next/head';
import { Inter } from '@next/font/google';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { getPokemonChunk } from './api/pokemon';
import PageHeader from '@/components/organisms/PageHeader';
import PokemonList from '@/components/organisms/PokemonList';
import Container from '@/components/layouts/Container';
import { styled } from '@/stitches.config';
import SearchableContent from '@/components/organisms/SearchableContent';
import { ChangeEvent } from 'react';
import useInputStore from '@/store';
import SinglePokemon from '@/components/organisms/SinglePokemon';
import Grid from '@/components/layouts/Grid';
import Stack from '@/components/layouts/Stack';

const inter = Inter({ subsets: ['latin'] });

const HomeContainer = styled(Container, {
    backgroundColor: '$lightGrey',
});

export default function Home() {
    const inputText = useInputStore((state) => state.inputText);
    const changeText = useInputStore((state) => state.changeText);

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={inter.className}>
                <PageHeader title="Bannano Frontend Challenge" />
                <Container padding={1}>
                    <SearchableContent
                        placeholder="Type a Pokémon name"
                        buttonText="Search"
                        onSubmit={changeText}
                        onClear={() => changeText('')}
                    >
                        {inputText ? (
                            <SinglePokemon name={inputText} />
                        ) : (
                            <PokemonList />
                        )}
                    </SearchableContent>
                </Container>
            </main>
        </>
    );
}

export async function getServerSideProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery({
        queryKey: ['pokemon'],
        queryFn: async () => getPokemonChunk(),
        initialData: {
            pages: [[]],
            pageParams: [0],
        },
    });

    return { props: { dehydratedState: dehydrate(queryClient) } };
}
