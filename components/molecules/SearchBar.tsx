import { styled } from '@/stitches.config';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Stack from '../layouts/Stack';
import { ChangeEventHandler, useState } from 'react';

export interface SearchBarProps {
    placeholder: string;
    buttonText: string;
    onSubmit: (newString: string) => void;
    onClear: () => void;
}

const SearchBar = (props: SearchBarProps) => {
    const [inputText, setInputText] = useState('');
    const { placeholder, buttonText, onSubmit, onClear } = props;
    return (
        <Stack
            onKeyUp={(event) => {
                if (event.key === 'Enter') {
                    onSubmit(inputText);
                }
            }}
        >
            <Input
                variant="searchBar"
                placeholder={placeholder}
                onChange={(e) => {
                    setInputText(e.target.value);
                    if (!e.target.value) onClear();
                }}
            />
            <Button variant="searchButton" onClick={() => onSubmit(inputText)}>
                {buttonText}
            </Button>
        </Stack>
    );
};

SearchBar.defaultProps = {
    placeholder: 'Type something here',
    buttonText: 'Search',
};

export default SearchBar;
