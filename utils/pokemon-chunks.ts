export function getMaxChunks(totalCount: number, chunkSize: number): number {
    const numberOfChunks = Math.floor(totalCount / chunkSize);
    const chunkRemainder = totalCount % chunkSize;

    return chunkRemainder > 0 ? numberOfChunks + 1 : numberOfChunks;
}

export function getNextChunk(
    offset: number,
    maxNumberOfChunks: number
): number | undefined {
    return offset < maxNumberOfChunks ? offset + 1 : undefined;
}
