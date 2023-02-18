
import { DISPLAY_MODES } from "@/constants";
import { useSearchStore } from "@/store";
import { fetchSearch } from "@/utils";
import { Box, Container, Grid, Section } from "@modulz/design-system";
import { useCallback, useState } from "react";
import Button from "../Atoms/Button";
import Search from "../Atoms/Search";

export default function SearchSection() {
	const [searchValue, setSearchValue] = useState("");
	const [mode ,toogleMode, updateSearchResult] = useSearchStore((state) => [
		state.mode,
		state.toogleMode,
		state.updateSearchResult])

	const onClickSearch = useCallback(async () => {
		if(!searchValue){
			return;
		}
		if(mode !== DISPLAY_MODES.SEARCH){
			toogleMode();
		}
		try {
			const pokemon = await fetchSearch(searchValue);
			updateSearchResult(pokemon);
		} catch (error) {
			console.log('errorFetchingSearch', error);
			updateSearchResult(null);
		}

	}, [searchValue])

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
						<Button text="Search" onClick={onClickSearch} />
					</Box>
				</Grid>
			</Container>
		</Section>
	);
}
