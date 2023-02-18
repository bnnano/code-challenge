import { useSearchStore } from "@/store";
import { Container, Grid, Section, Text } from "@modulz/design-system";
import PokemonCard from "./PokemonCard";

export default function PokemonSearch() {
    const searchResult = useSearchStore((state) => state.searchResult);

    if(!searchResult){
        return <Text>This Pokemon doesn't exist</Text>
    }
    return <>
    <Section
        data-testid='search-section'
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
                <PokemonCard title={searchResult.name} />
            </Grid>
        </Container>
    </Section>
</>
}