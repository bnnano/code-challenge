import Image from "next/image";
import type { Pokemon } from "../../types/pokemon";


const PokemonDetailPage = (props: Pokemon) => {
    const { name } = props;
    const imageUrl = `https://bulbapedia.bulbagarden.net/wiki/${name}`;
    return (<div>
        <Image alt={name} src={imageUrl} />
        <h1>{name}</h1>
    </div>);
}

export default PokemonDetailPage;