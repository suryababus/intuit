import { useLazyQuery } from "@apollo/client";
import { gql } from "../../__generated__/gql";

export const GET_FILTERED_COUNTRIES = gql(/* GraphQL */ `
  query GetFilteredCountries($filterOptions: FilterOptions) {
    getFilteredCountries(filterOptions: $filterOptions) {
      cca2
      ccn3
      cca3
      cioc
      independent
      status
      unMember
      region
      subregion
      landlocked
      area
      flag
      population
      fifa
      startOfWeek
      capitalInfo {
        latlng
      }
      coatOfArms {
        png
        svg
      }
      flags {
        png
        svg
        alt
      }
      continents
      timezones
      car {
        side
        signs
      }
      maps {
        googleMaps
        openStreetMaps
      }
      borders
      latlng
      translations {
        key
        value {
          official
          common
        }
      }
      altSpellings
      capital
      idd {
        root
        suffixes
      }
      currencies {
        key
        value {
          name
          symbol
        }
      }
      tld
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
      languages {
        key
        value
      }
    }
  }
`);

export const useGetFilteredCountries = () => {
  return useLazyQuery(GET_FILTERED_COUNTRIES);
};
