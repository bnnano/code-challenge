import { styled } from '@/stitches.config';

const Stack = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flex: '1 1 auto',
    variants: {
        direction: {
            row: {
                flexDirection: 'row',
            },
            column: {
                flexDirection: 'column',
            },
        },
        alignItems: {
            start: {
                alignItems: 'flex-start',
            },
            center: {
                alignItems: 'center',
            },
            end: {
                alignItems: 'flex-end',
            },
            stretch: {
                alignItems: 'stretch',
            },
            baseline: {
                alignItems: 'baseline',
            },
        },
        justifyContent: {
            start: {
                justifyContent: 'flex-start',
            },
            center: {
                justifyContent: 'center',
            },
            end: {
                justifyContent: 'flex-end',
            },
            between: {
                justifyContent: 'space-between',
            },
        },
        wrap: {
            noWrap: {
                flexWrap: 'nowrap',
            },
            wrap: {
                flexWrap: 'wrap',
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
});

export default Stack;
