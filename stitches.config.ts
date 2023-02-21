import { createStitches } from '@stitches/react';

export const { styled, css, getCssText } = createStitches({
    theme: {
        media: {
            bp1: '(min-width: 640px)',
            bp2: '(min-width: 768px)',
            bp3: '(min-width: 1024px)',
        },
        colors: {
            lightestBluegrey: '#a2c7dd',
            lightBluegrey: '#408AB6',
            bluegrey: '#436070',
            darkBluegrey: '#143C52',
            darkestBluegrey: '#004368',
            lightGrey: '#F0F0F0',
            grey: '#A7B6BE',
            darkGrey: '#8A9DA8',
        },
        space: {
            1: '4px',
            2: '8px',
            3: '12px',
            4: '16px',
            5: '20px',
            6: '24px',
            7: '28px',
            8: '32px',
            9: '36px',
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
