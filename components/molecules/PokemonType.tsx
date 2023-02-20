import Typography from '../atoms/Typography';
import Stack from '../layouts/Stack';

export interface PokemonTypeProps {
    type: string;
}

const PokemonType = (props: PokemonTypeProps) => {
    const { type } = props;
    return (
        <Stack>
            <Typography>{type.toUpperCase()}</Typography>
        </Stack>
    );
};

export default PokemonType;
