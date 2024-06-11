import type { QueryResolvers } from "../../../generated/graphql";
import { getCountriesMock } from "../mock";
import { convertMapToKeyValue } from "../util";

export const getFilteredCountriesResolver: QueryResolvers["getFilteredCountries"] =
  async (_, { filterOptions }) => {
    let filteredCountries = getCountriesMock;
    if (filterOptions) {
      const { field, value } = filterOptions;

      switch (field) {
        case "NAME":
          filteredCountries = filteredCountries.filter((country) =>
            country?.name?.common
              ?.toLowerCase()
              .includes(value?.toLowerCase() ?? "")
          );
          break;
        case "REGION":
          filteredCountries = filteredCountries.filter((country) =>
            country?.region?.toLowerCase().includes(value?.toLowerCase() ?? "")
          );
          break;
        case "CURRENCY":
          filteredCountries = filteredCountries.filter((country) => {
            const currencies = country?.currencies;
            let hasCurrency = false;
            Object.keys(currencies ?? {}).forEach((key) => {
              if (
                currencies?.[key]?.name
                  ?.toLowerCase()
                  .includes(value?.toLowerCase() ?? "")
              ) {
                hasCurrency = true;
              }
            });
            return hasCurrency;
          });
          break;
        case "LANGUAGE":
          filteredCountries = filteredCountries.filter((country) => {
            const languages = country?.languages;
            let hasLanguage = false;
            Object.keys(languages ?? {}).forEach((key) => {
              if (
                languages?.[key]
                  ?.toLowerCase()
                  .includes(value?.toLowerCase() ?? "")
              ) {
                hasLanguage = true;
              }
            });
            return hasLanguage;
          });
          break;
      }
    }

    return filteredCountries.map((country) => {
      return {
        ...country,
        name: {
          ...country.name,
          nativeName: convertMapToKeyValue(country?.name?.nativeName),
        },
        languages: convertMapToKeyValue(country.languages),
        translations: convertMapToKeyValue(country.translations),
        currencies: convertMapToKeyValue(country.currencies),
      };
    });
  };
