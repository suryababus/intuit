import { useLazyQuery } from "@apollo/client";
import { gql } from "../../__generated__/gql";

export const GET_COUNTRIES_BY_REGION = gql(/* GraphQL */ `
  query GetCountriesByRegion($region: String) {
    getCountriesByRegion(region: $region) {
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

export const useGetCountriesByRegion = () => {
  return useLazyQuery(GET_COUNTRIES_BY_REGION);
};
