import { fireEvent, render, screen, within } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { BrowseCountries } from "../../../components/browse-countries";
import { countriesMock } from "./mock";
import { formatNumberString } from "../../../utils/format-number";
import { GET_FILTERED_COUNTRIES } from "../../../hooks/queries/useFilterCountries";

describe("Browse Countries - Positive", () => {
  beforeEach(() => {
    const mocks = [
      {
        dealy: 30,
        request: {
          query: GET_FILTERED_COUNTRIES,
          variables: { filterOptions: { field: "NAME", value: "" } },
        },
        result: countriesMock,
      },
    ];
    render(
      <MockedProvider mocks={mocks}>
        <BrowseCountries />
      </MockedProvider>
    );
  });

  it("Should show loading before rendering data", async () => {
    //loading
    const loading = await screen.findAllByTestId("country-card-loading");
    expect(loading).toHaveLength(3);

    await screen.findByText(
      countriesMock.data.getFilteredCountries[0].name.common
    );
  });

  it("Should show correct data in card", async () => {
    //loading
    await screen.findByText(
      countriesMock.data.getFilteredCountries[0].name.common
    );

    countriesMock.data.getFilteredCountries.forEach((country) => {
      const card = within(
        screen.getByTestId(`country-card-${country.name.common}`)
      );
      // Its name
      expect(card.getByText(country.name.common)).toBeInTheDocument();
      // Its flag (display the icon in smaller size)
      expect(card.getByRole(`img`).getAttribute("src")).toBe(country.flags.png);
      // Population
      expect(
        card.getByText(
          new RegExp(`\\b${formatNumberString(country.population)}\\b`)
        )
      ).toBeInTheDocument();

      // Region
      expect(
        card.getByText(new RegExp(`\\b${country.region}\\b`))
      ).toBeInTheDocument();

      // Capital
      expect(
        card.getByText(new RegExp(`\\b${country.capital}\\b`))
      ).toBeInTheDocument();
    });
  });

  it("Should show country detail popup", async () => {
    const countryData = countriesMock.data.getFilteredCountries[0];

    const card = await screen.findByTestId(
      `country-card-${countryData.name.common}`
    );

    fireEvent.click(card);

    const modal = await screen.findByTestId(`country-modal`);

    const withInModal = within(modal);

    // Its flag (should display larger image while viewing the details)
    expect(withInModal.getByRole(`img`).getAttribute("src")).toBe(
      countryData.flags.png
    );

    // Population
    expect(
      withInModal.getByText(
        new RegExp(`\\b${formatNumberString(countryData.population)}\\b`)
      )
    ).toBeInTheDocument();

    // Region
    expect(withInModal.getByText(new RegExp(`\\b${countryData.region}\\b`)))
      .toBeInTheDocument;

    // Capital
    expect(withInModal.getByText(new RegExp(`\\b${countryData.capital}\\b`)))
      .toBeInTheDocument;

    // Native Name
    expect(
      withInModal.getByText(
        countryData.name.nativeName.map((n) => n.value.official).join(", ")
      )
    ).toBeInTheDocument;

    // Currencies used
    expect(
      withInModal.getByText(
        countryData.currencies.map((c) => c.value.name).join(", ")
      )
    ).toBeInTheDocument;

    // Languages
    expect(
      withInModal.getByText(
        countryData.languages.map((l) => l.value).join(", ")
      )
    ).toBeInTheDocument;

    // Border countries

    if (!countryData.borders) {
      expect(withInModal.getByText("No border")).toBeInTheDocument;
    } else {
      countryData?.borders?.forEach((border) => {
        expect(
          withInModal.getByText(new RegExp(`\\b${border}\\b`))
        ).toBeInTheDocument();
      });
    }
  });
});
