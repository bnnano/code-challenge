import { titleCase } from '../../utils/pokemon-names';

describe('Pokémon Name Utilities', () => {
    describe('Name to title case', () => {
        test.each([
            {
                description: 'Should title case single word',
                originalString: 'arceus',
                expectedOutput: 'Arceus',
            },
            {
                description: 'Should title case all words in sentence',
                originalString: 'arceus is the bravest',
                expectedOutput: 'Arceus Is The Bravest',
            },
            {
                description: 'Should return empty string if empty string given',
                originalString: '',
                expectedOutput: '',
            },
        ])('$description', ({ originalString, expectedOutput }) => {
            expect(titleCase(originalString)).toBe(expectedOutput);
        });
    });
});
