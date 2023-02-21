import { ChangeEventHandler, PropsWithChildren } from 'react';
import SearchBar from '../molecules/SearchBar';
import Stack from '../layouts/Stack';
import { styled } from '@/stitches.config';

export interface SearchableContentProps extends PropsWithChildren {
    placeholder: string;
    buttonText: string;
    onSubmit: (newString: string) => void;
    onClear: () => void;
}

const StyledSearchBar = styled(SearchBar, {
    flexBasis: '200px',
});

const SearchableContent = (props: SearchableContentProps) => {
    const { children, ...searchBarProps } = props;
    return (
        <Stack direction="column" gap="9">
            <StyledSearchBar {...searchBarProps} />
            {children}
        </Stack>
    );
};

export default SearchableContent;
