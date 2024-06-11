import type { Resolvers } from "../../generated/graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { getCountriesByNameResolver } from "./resolvers/getCountriesByName";
import { getCountriesResolver } from "./resolvers/getCountries";
import { getCountriesByRegionResolver } from "./resolvers/getCountriesByRegion";
import { getFilteredCountriesResolver } from "./resolvers/getFilteredCountries";

const file = Bun.file("src/resolvers/countries/schema.graphql");

const resolver: Resolvers = {
  Query: {
    getCountries: getCountriesResolver,
    getCountriesByName: getCountriesByNameResolver,
    getCountriesByRegion: getCountriesByRegionResolver,
    getFilteredCountries: getFilteredCountriesResolver,
  },
};

export const countriesSchema = makeExecutableSchema({
  typeDefs: await file.text(),
  resolvers: resolver,
});
