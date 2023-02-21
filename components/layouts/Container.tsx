import { styled } from '@/stitches.config';

const Container = styled('div', {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '$lightGrey',
    variants: {
        size: {
            '1': {
                maxWidth: '512px',
            },
            '2': {
                maxWidth: '1024px',
            },
            '3': {
                maxWidth: '1536px',
            },
            '4': {
                maxWidth: 'none',
            },
        },
        padding: {
            1: {
                paddingTop: '120px',
            },
            2: {
                paddingTop: '240px',
            },
            3: {
                paddingTop: '360px',
            },
        },
    },
    defaultVariants: {
        size: '4',
    },
});

export default Container;
