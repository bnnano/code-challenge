export function titleCase(str: string) {
    return str
        .toLowerCase()
        .replace(/(^|\s)\S/g, (firstLetter: string) =>
            firstLetter.toUpperCase()
        );
}
