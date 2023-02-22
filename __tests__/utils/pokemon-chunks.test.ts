import { getMaxChunks, getNextChunk } from '../../utils/pokemon-chunks';

describe('Pokemon Chunks Util Functions', () => {
    describe('Get Max Chunks', () => {
        test.each([
            {
                description: 'Dividing 0',
                totalCount: 0,
                chunkSize: 2,
                expectedOutput: 0,
            },
            {
                description: 'Dividing without remainder',
                totalCount: 10,
                chunkSize: 2,
                expectedOutput: 5,
            },
            {
                description: 'Dividing with remainder',
                totalCount: 10,
                chunkSize: 3,
                expectedOutput: 4,
            },
        ])('$description', ({ totalCount, chunkSize, expectedOutput }) => {
            expect(getMaxChunks(totalCount, chunkSize)).toBe(expectedOutput);
        });
    });

    describe('Get Next Chunk', () => {
        test.each([
            {
                description: 'Get next chunk when offset is 0',
                maxNumberOfChunks: 5,
                offset: 0,
                expectedOutput: 1,
            },
            {
                description:
                    'Get next chunk when offset is equal to maxNumberOfChunks',
                maxNumberOfChunks: 5,
                offset: 5,
                expectedOutput: undefined,
            },
            {
                description:
                    'Get next chunk when offset is one shy of maxNumberOfChunks',
                maxNumberOfChunks: 5,
                offset: 4,
                expectedOutput: 5,
            },
        ])('double(%d)', ({ offset, maxNumberOfChunks, expectedOutput }) => {
            expect(getNextChunk(offset, maxNumberOfChunks)).toBe(
                expectedOutput
            );
        });
    });
});
