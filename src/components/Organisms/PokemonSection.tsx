import { DISPLAY_MODES } from "@/constants";
import { useSearchStore } from "@/store";
import PokemonSearch from "../Molecules/PokemonSearch";
import PokemonAll from "./PokemonAll";

export default function PokemonSection() {
    const mode = useSearchStore((state) => state.mode);

        return <>
            {mode === DISPLAY_MODES.GRID ?
            <PokemonAll/> :
            <PokemonSearch/>
            }
        </>

}
