import * as React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Layout from "../../components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { fetchSearch } from "@/utils";

const mockPokemonAllResponse ={
	results: [
		{ name: 'pokemon1'},
		{ name: 'pokemon2'},
	]
};

jest.mock("../../utils", () => {
	return {
		fetchPokemons: jest.fn(() => Promise.resolve(mockPokemonAllResponse)),
		fetchSearch: jest.fn(() => Promise.resolve(null)),
	};
});

describe("Layout", () => {
	beforeEach(() => {
        jest.clearAllMocks();
      });

	const queryClient = new QueryClient();
	it("should render the Layout succesfully", () => {
		render(
			<QueryClientProvider client={queryClient}>
				<Layout />
			</QueryClientProvider>
		);
		const title = screen.getByText("Bannano Frontend Challenge");
		expect(title).toBeDefined();
	});

	it("should render PokemonSearch when a pokemon is found", async () => {
        jest.mocked(fetchSearch).mockImplementation(() => {
			return Promise.resolve({ name: 'pokemon' });
		});

        render(
            <QueryClientProvider client={queryClient}>
				<Layout />
			</QueryClientProvider>
		);

        fireEvent.change(screen.getByTestId('search-input'), {target: {value: 'pikachu'}})

        act(()=>{
            fireEvent.click(screen.getByTestId('search-button'));
        });

        expect(fetchSearch).toHaveBeenCalledTimes(1);
        const searchSection = await screen.findByTestId('search-section');
        expect(searchSection).toBeDefined();
    })
});
