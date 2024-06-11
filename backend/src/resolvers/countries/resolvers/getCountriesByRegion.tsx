import type { QueryResolvers } from "../../../generated/graphql";
import { getCountriesMock } from "../mock";
import { convertMapToKeyValue } from "../util";

export const getCountriesByRegionResolver: QueryResolvers["getCountriesByRegion"] =
  async (_, { region }) => {
    // const url = "/region/" + region;
    // const response = await restCountries.get<CountryResponse[]>(url, {
    //   params: {
    //     fields: fields.map((field) => field).join(","),
    //   },
    // });
    // console.log(response.data);
    const filtered = getCountriesMock.filter((country) =>
      country?.region?.toLowerCase().includes(region?.toLowerCase() ?? "")
    );

    return filtered.map((country) => {
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
