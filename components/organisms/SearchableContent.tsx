import { ChangeEventHandler, PropsWithChildren } from 'react';
import SearchBar from '../molecules/SearchBar';
import Stack from '../layouts/Stack';
import { styled } from '@/stitches.config';
import Grid from '../layouts/Grid';

export interface SearchableContentProps extends PropsWithChildren {
    placeholder: string;
    buttonText: string;
    onSubmit: (newString: string) => void;
    onClear: () => void;
}

const SearchableContent = (props: SearchableContentProps) => {
    const { children, ...searchBarProps } = props;
    return (
        <Stack direction="column" gap="9">
            <Grid columns="2">
                <SearchBar {...searchBarProps} />
            </Grid>
            {children}
        </Stack>
    );
};

export default SearchableContent;
