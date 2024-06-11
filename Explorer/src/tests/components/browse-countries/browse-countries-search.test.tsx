import { fireEvent, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { BrowseCountries } from "../../../components/browse-countries";
import { countriesMock } from "./mock";
import { GET_FILTERED_COUNTRIES } from "../../../hooks/queries/useFilterCountries";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
loadDevMessages();
loadErrorMessages();

describe("Browse Countries - Positive", () => {
  beforeEach(() => {
    const mocks = [
      {
        dealy: 30,
        request: {
          query: GET_FILTERED_COUNTRIES,
        },
        variableMatcher: (variables: unknown) => {
          console.log("variables", variables);
          return true;
        },
        result: countriesMock,
      },
    ];
    render(
      <MockedProvider mocks={mocks} showWarnings>
        <BrowseCountries />
      </MockedProvider>
    );
  });

  it("Should show correct data in card for search", async () => {
    //loading
    await screen.findByText(
      countriesMock.data.getFilteredCountries[0].name.common
    );

    const searchField = screen.getByRole("textbox");

    fireEvent.input(searchField, { target: { value: "India" } });

    screen.logTestingPlaygroundURL();
  });
});
