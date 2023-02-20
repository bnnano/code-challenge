import { styled } from '@stitches/react';
import { PropsWithChildren } from 'react';

export interface InputProps {
    placeholder: string;
}

const Input = styled('input', {
    height: '56px',
    border: 'none',
    variants: {
        variant: {
            searchBar: {
                borderRadius: '8px 0px 0px 8px',
            },
        },
    },
});

export default Input;
