import Typography from '../atoms/Typography';
import { styled } from '@/stitches.config';
import type * as Stitches from '@stitches/react';

const PokemonType = styled(Typography, {
    color: 'white',
    textAlign: 'center',
    fontSize: '14px',
    borderRadius: '8px',
    height: '$3',
    padding: '$2',
    variants: {
        type: {
            normal: {
                backgroundColor: '$typeNormal',
            },
            fire: {
                backgroundColor: '$typeFire',
            },
            water: {
                backgroundColor: '$typeWater',
            },
            grass: {
                backgroundColor: '$typeGrass',
            },
            electric: {
                backgroundColor: '$typeElectric',
            },
            ice: {
                backgroundColor: '$typeIce',
            },
            fighting: {
                backgroundColor: '$typeFighting',
            },
            poison: {
                backgroundColor: '$typePoison',
            },
            ground: {
                backgroundColor: '$typeGround',
            },
            flying: {
                backgroundColor: '$typeFlying',
            },
            psychic: {
                backgroundColor: '$typePsychic',
            },
            bug: {
                backgroundColor: '$typeBug',
            },
            rock: {
                backgroundColor: '$typeRock',
            },
            ghost: {
                backgroundColor: '$typeGhost',
            },
            dark: {
                backgroundColor: '$typeDark',
            },
            dragon: {
                backgroundColor: '$typeDragon',
            },
            steel: {
                backgroundColor: '$typeSteel',
            },
            fairy: {
                backgroundColor: '$typeFairy',
            },
        },
    },
});

export type PokemonTypeVariants = Stitches.VariantProps<typeof PokemonType>;

export default PokemonType;
