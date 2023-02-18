import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import React from "react";
import { Container, Grid, Section } from "@modulz/design-system";
import PokemonCard from "../Molecules/PokemonCard";
import { Pokemon } from "@/types";
import { fetchPokemons } from "@/utils";

export default function PokemonAll() {
	const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
		"pokemons",
		({ pageParam }) => fetchPokemons(pageParam),
		{
			getNextPageParam: (lastPage, allPages) => {
				const maxPages = lastPage.count / 12;
				const nextPage = allPages.length + 1;
				return nextPage <= maxPages ? lastPage.next : undefined;
			},
		}
	);

	useEffect(() => {
		let fetching = false;
		const onScroll = async (event: any) => {
			const { scrollHeight, scrollTop, clientHeight } =
				event.target.scrollingElement;
			if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
				fetching = true;
				if (hasNextPage) await fetchNextPage();
				fetching = false;
			}
		};

		document.addEventListener("scroll", onScroll);
		return () => {
			document.removeEventListener("scroll", onScroll);
		};
	}, []);
	if (!data?.pages || data?.pages.length < 1) {
		return null;
	}
	return (
		<>
			<Section
				size="3"
				css={{
					textAlign: "center",
					width: "100%",
					paddingTop: "0px",
				}}
			>
				<Container size="3">
					<Grid
						css={{
							textAlign: "start",
							gridTemplateColumns: "repeat(3, 1fr)",
						}}
					>
						{data?.pages.map((page) =>
							page.results.map((pokemon: Pokemon) => (
								<PokemonCard key={pokemon.name} title={pokemon.name} />
							))
						)}
					</Grid>
				</Container>
			</Section>
		</>
	);
}
