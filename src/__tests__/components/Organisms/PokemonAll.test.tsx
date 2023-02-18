import * as React from "react";
import { fireEvent, act, render, screen, waitFor } from "@testing-library/react";
import { fetchPokemons } from "@/utils";
import PokemonAll from "@/components/Organisms/PokemonAll";
import { QueryClient, QueryClientProvider } from "react-query";

const mockPokemonAllResponse = {
	results: [
		{ name: 'pokemon1'},
		{ name: 'pokemon3'},
        { name: 'pokemon4'},
        { name: 'pokemon5'},
        { name: 'pokemon6'},
        { name: 'pokemon7'},
        { name: 'pokemon8'},
        { name: 'pokemon9'},
        { name: 'pokemon10'},
        { name: 'pokemon11'},
        { name: 'pokemon12'},
	]
};

jest.mock("../../../utils", () => {
	return {
		fetchPokemons: jest.fn(() => Promise.resolve(mockPokemonAllResponse)),
	};
});

describe("SearchSection", () => {
    const queryClient = new QueryClient();
    beforeEach(() => {
        jest.clearAllMocks();
    });

	it("should render the PokemonAll succesfully", () => {
		render(
            <QueryClientProvider client={queryClient}>
                <PokemonAll />
            </QueryClientProvider>
		);
		const title = screen.findByText("pokemon12");
		expect(title).toBeDefined();
        expect(fetchPokemons).toHaveBeenCalledTimes(1);
	});
});
