import { DISPLAY_MODES } from "@/constants";
import { useSearchStore } from "@/store";
import Loader from "../Atoms/Loader";
import PokemonSearch from "../Molecules/PokemonSearch";
import PokemonAll from "./PokemonAll";

export default function PokemonSection() {
    const [mode, isLoading] = useSearchStore((state) => [
        state.mode,
        state.isLoading
    ])

    if(isLoading) {
        return <Loader />
    }

    return <>
        {mode === DISPLAY_MODES.GRID ?
        <PokemonAll/> :
        <PokemonSearch/>
        }
    </>

}
