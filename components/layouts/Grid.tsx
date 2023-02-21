import { styled } from '@/stitches.config';
import { PropsWithChildren } from 'react';

export interface GridProps extends PropsWithChildren {}

const Grid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 320px)',
    gap: '$8',
});

export default Grid;
