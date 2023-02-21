import { styled } from '@/stitches.config';
import { PropsWithChildren } from 'react';

export interface ButtonProps extends PropsWithChildren {}

const Button = styled('button', {
    backgroundColor: '$darkestBluegrey',
    color: 'white',
    borderRadius: '8px',
    padding: '$4',

    variants: {
        variant: {
            searchButton: {
                borderRadius: '0px 8px 8px 0px',
                height: '56px',
                border: 'none',
            },
        },
    },
});

export default Button;
