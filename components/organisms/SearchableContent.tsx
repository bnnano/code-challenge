import { PropsWithChildren } from 'react';
import SearchBar from '../molecules/SearchBar';

export interface SearchableContentProps extends PropsWithChildren {}

const SearchableContent = (props: SearchableContentProps) => {
    const { children } = props;
    return (
        <div>
            <SearchBar />
            {children}
        </div>
    );
};

export default SearchableContent;
