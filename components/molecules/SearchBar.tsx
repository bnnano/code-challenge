import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Stack from '../layouts/Stack';

export interface SearchBarProps {
    placeholder: string;
    buttonText: string;
}

const SearchBar = (props: SearchBarProps) => {
    const { placeholder, buttonText } = props;
    return (
        <Stack>
            <Input placeholder={placeholder} />
            <Button>{buttonText}</Button>
        </Stack>
    );
};

SearchBar.defaultProps = {
    placeholder: 'Type a Pokémon name',
    buttonText: 'Search',
};

export default SearchBar;
