import { useQuery } from "@apollo/client";
import { gql } from "../../__generated__/gql";

export const useCountries = () => {
  return useQuery(
    gql(`
        query ExampleQuery {
          getCountries {
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
      `)
  );
};
