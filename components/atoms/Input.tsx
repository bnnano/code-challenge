import { styled } from '@/stitches.config';
import { PropsWithChildren } from 'react';

export interface InputProps {
    placeholder: string;
}

const Input = styled('input', {
    height: '56px',
    border: 'none',
    padding: '$4',
    width: '100%',
    variants: {
        variant: {
            searchBar: {
                borderRadius: '8px 0px 0px 8px',
            },
        },
    },
});

export default Input;
