import { styled } from '@/stitches.config';
import { PropsWithChildren } from 'react';

export interface GridProps extends PropsWithChildren {}

const Grid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 320px))',
    variants: {
        fillHeight: {
            true: {
                height: '100%',
            },
        },
        rows: {
            autoHeight: {
                gridAutoRows: 'auto',
            },
        },
        columns: {
            1: {
                gridTemplateColumns: 'repeat(1, 1fr)',
            },
            2: {
                gridTemplateColumns: 'repeat(2, 1fr)',
            },
        },
        center: {
            true: {
                justifyContent: 'center',
            },
        },
        alignItems: {
            center: {
                alignItems: 'center',
            },
        },
        alignContent: {
            spaceEvenly: {
                alignContent: 'space-evenly',
            },
            spaceBetween: {
                alignContent: 'space-between',
            },
        },
        justifyItems: {
            center: {
                justifyItems: 'center',
            },
        },
        gap: {
            1: {
                gap: '$1',
            },
            2: {
                gap: '$2',
            },
            3: {
                gap: '$3',
            },
            4: {
                gap: '$4',
            },
            5: {
                gap: '$5',
            },
            6: {
                gap: '$6',
            },
            7: {
                gap: '$7',
            },
            8: {
                gap: '$8',
            },
            9: {
                gap: '$9',
            },
        },
    },
    defaultVariants: {
        gap: 8,
    },
});

export default Grid;
