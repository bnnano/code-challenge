import { styled } from '@/stitches.config';

const Container = styled('div', {
    display: 'grid',
    alignItems: 'center',
    backgroundColor: '$lightGrey',
    variants: {
        padding: {
            1: {
                padding: '10%',
            },
            2: {
                paddingTop: '240px',
                paddingLeft: '10%',
                paddingRight: '10%',
            },
            3: {
                paddingTop: '360px',
                paddingLeft: '10%',
                paddingRight: '10%',
            },
        },
        center: {
            true: {
                justifyContent: 'center',
            },
        },
    },
});

export default Container;
