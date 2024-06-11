import { fields, restCountries } from "../constants";
import type { QueryResolvers } from "../../../generated/graphql";
import type { CountryResponse } from "../types";
import { convertMapToKeyValue } from "../util";

export const getCountriesResolver: QueryResolvers["getCountries"] =
  async () => {
    const response = await restCountries.get<CountryResponse[]>("/all", {
      params: {
        fields: fields.map((field) => field).join(","),
      },
    });
    return response.data.map((country) => {
      return {
        ...country,
        name: {
          ...country.name,
          nativeName: convertMapToKeyValue(country.name.nativeName),
        },
        languages: convertMapToKeyValue(country.languages),
        translations: convertMapToKeyValue(country.translations),
        currencies: convertMapToKeyValue(country.currencies),
      };
    });
  };
