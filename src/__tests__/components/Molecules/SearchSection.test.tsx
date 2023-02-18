import * as React from "react";
import { fireEvent, act, render, screen } from "@testing-library/react";
import SearchSection from "@/components/Molecules/SearchSection";
import { fetchSearch } from "@/utils";

jest.mock("../../../utils", () => {
	return {
		fetchSearch: jest.fn(() => Promise.resolve(null)),
	};
});

describe("SearchSection", () => {
    beforeEach(() => {
        jest.clearAllMocks();
      });

	it("should render the Search succesfully", () => {
		render(
            <SearchSection />
		);
		const title = screen.getByText("Search");
		expect(title).toBeDefined();
	});

    it("should call fetchSearch when clicking button", () => {
        render(
            <SearchSection />
		);

        fireEvent.change(screen.getByTestId('search-input'), {target: {value: 'pikachu'}})
        fireEvent.click(screen.getByTestId('search-button'));

        expect(fetchSearch).toHaveBeenCalledTimes(1);
    })

});
