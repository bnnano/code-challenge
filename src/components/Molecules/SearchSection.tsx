
import { DISPLAY_MODES } from "@/constants";
import { useSearchStore } from "@/store";
import { fetchSearch } from "@/utils";
import { Box, Container, Grid, Section } from "@modulz/design-system";
import { useCallback, useState } from "react";
import Button from "../Atoms/Button";
import Search from "../Atoms/Search";

export default function SearchSection() {
	const [searchValue, setSearchValue] = useState("");
	const [mode ,toogleMode, updateSearchResult, updateIsLoading] = useSearchStore((state) => [
		state.mode,
		state.toogleMode,
		state.updateSearchResult,
		state.updateIsLoading
	])

	const onClickSearch = useCallback(async () => {
		if(!searchValue){
			return;
		}
		if(mode !== DISPLAY_MODES.SEARCH){
			toogleMode();
		}
		updateIsLoading(true);
		try {
			const pokemon = await fetchSearch(searchValue);
			updateIsLoading(false);
			updateSearchResult(pokemon);
		} catch (error) {
			console.log('errorFetchingSearch', error);
			updateIsLoading(false);
			updateSearchResult(null);
		}

	}, [searchValue, mode])

	const onChangeSearch = (value: string) => {
		if(!value && mode === DISPLAY_MODES.SEARCH){
			toogleMode();
		}
		setSearchValue(value);
	}
	return (
		<Section
			size="3"
			css={{
				textAlign: "center",
				width: "100%",
				paddingBottom: "$6",
				paddingLeft: "$4",
			}}
		>
			<Container size="3">
				<Grid
					css={{
						textAlign: "start",
						gridTemplateColumns: "repeat(2, 1fr)",
					}}
				>
					<Box>
						<Search value={searchValue} onChange={onChangeSearch} />
					</Box>
					<Box>
						<Button id='search-button' text="Search" onClick={onClickSearch} />
					</Box>
				</Grid>
			</Container>
		</Section>
	);
}
