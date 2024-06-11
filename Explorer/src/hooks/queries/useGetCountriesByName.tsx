import { useLazyQuery } from "@apollo/client";
import { gql } from "../../__generated__/gql";

export const GET_COUNTRIES_BY_NAME = gql(/* GraphQL */ `
  query CountriesByName($name: String) {
    getCountriesByName(name: $name) {
      name {
        common
        official
        nativeName {
          key
          value {
            official
            common
          }
        }
      }
      flag
      currencies {
        key
        value {
          name
          symbol
        }
      }
      borders
      capital
      maps {
        googleMaps
        openStreetMaps
      }
      timezones
      continents
      flags {
        png
        svg
        alt
      }
      population
      region
      languages {
        key
        value
      }
    }
  }
`);

export const useGetCountriesByName = () => {
  return useLazyQuery(GET_COUNTRIES_BY_NAME);
};
