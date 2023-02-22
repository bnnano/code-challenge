import SearchBar from '@/components/molecules/SearchBar';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('SearchBar Molecule Tests', () => {
    describe('onClear Behavior', () => {
        test('Should call onClear callback when SearchBar Input becomes empty', async () => {
            const mockProps = {
                onClear: jest.fn(),
                onSubmit: jest.fn(),
                placeholder: 'Type Pokémon name',
                buttonText: 'Search',
            };
            const user = userEvent.setup();
            render(<SearchBar {...mockProps} />);

            const inputElement = screen.getByRole('textbox');
            expect(inputElement).toBeInTheDocument();

            await user.type(inputElement, 'Pik');
            expect(inputElement).toHaveValue('Pik');

            await user.clear(inputElement);
            expect(mockProps.onClear).toHaveBeenCalledTimes(1);
        });
    });
});
