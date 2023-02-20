import { createStitches } from '@stitches/react';

export const { styled, css, getCssText } = createStitches({
    theme: {
        colors: {
            lightBluegrey: '#408AB6',
            bluegrey: '#436070',
            darkBluegrey: '#143C52',
            darkestBluegrey: '#004368',
            lightGrey: '#F0F0F0',
            grey: '#A7B6BE',
            darkGrey: '#8A9DA8',
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
        },
        fontSizes: {
            1: '12px',
            2: '13px',
            3: '15px',
        },
        fonts: {
            untitled: 'Quicksand, Untitled Sans, apple-system, sans-serif',
            mono: 'Söhne Mono, menlo, monospace',
        },
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        borderWidths: {},
        borderStyles: {},
        radii: {},
        shadows: {},
        zIndices: {},
        transitions: {},
    },
});
