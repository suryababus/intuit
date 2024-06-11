/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CapitalInfo = {
  __typename?: 'CapitalInfo';
  latlng?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type Car = {
  __typename?: 'Car';
  side?: Maybe<Scalars['String']['output']>;
  signs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CoatOfArms = {
  __typename?: 'CoatOfArms';
  png?: Maybe<Scalars['String']['output']>;
  svg?: Maybe<Scalars['String']['output']>;
};

export type Country = {
  __typename?: 'Country';
  altSpellings?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  area?: Maybe<Scalars['Float']['output']>;
  borders?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  capital?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  capitalInfo?: Maybe<CapitalInfo>;
  car?: Maybe<Car>;
  cca2?: Maybe<Scalars['String']['output']>;
  cca3?: Maybe<Scalars['String']['output']>;
  ccn3?: Maybe<Scalars['String']['output']>;
  cioc?: Maybe<Scalars['String']['output']>;
  coatOfArms?: Maybe<CoatOfArms>;
  continents?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  currencies?: Maybe<Array<Maybe<Currency>>>;
  fifa?: Maybe<Scalars['String']['output']>;
  flag?: Maybe<Scalars['String']['output']>;
  flags?: Maybe<Flags>;
  idd?: Maybe<Idd>;
  independent?: Maybe<Scalars['Boolean']['output']>;
  landlocked?: Maybe<Scalars['Boolean']['output']>;
  languages?: Maybe<Array<Maybe<KeyValue>>>;
  latlng?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  maps?: Maybe<Maps>;
  name?: Maybe<Name>;
  population?: Maybe<Scalars['Int']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  startOfWeek?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subregion?: Maybe<Scalars['String']['output']>;
  timezones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tld?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translations?: Maybe<Array<Maybe<Translation>>>;
  unMember?: Maybe<Scalars['Boolean']['output']>;
};

export type Currency = {
  __typename?: 'Currency';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<CurrencyDetail>;
};

export type CurrencyDetail = {
  __typename?: 'CurrencyDetail';
  name?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};

export type FilterOptions = {
  field?: InputMaybe<SearchField>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Flags = {
  __typename?: 'Flags';
  alt?: Maybe<Scalars['String']['output']>;
  png?: Maybe<Scalars['String']['output']>;
  svg?: Maybe<Scalars['String']['output']>;
};

export type Idd = {
  __typename?: 'Idd';
  root?: Maybe<Scalars['String']['output']>;
  suffixes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type KeyValue = {
  __typename?: 'KeyValue';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Maps = {
  __typename?: 'Maps';
  googleMaps?: Maybe<Scalars['String']['output']>;
  openStreetMaps?: Maybe<Scalars['String']['output']>;
};

export type Name = {
  __typename?: 'Name';
  common?: Maybe<Scalars['String']['output']>;
  nativeName?: Maybe<Array<Maybe<NativeName>>>;
  official?: Maybe<Scalars['String']['output']>;
};

export type NativeInfo = {
  __typename?: 'NativeInfo';
  common?: Maybe<Scalars['String']['output']>;
  official?: Maybe<Scalars['String']['output']>;
};

export type NativeName = {
  __typename?: 'NativeName';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<NativeInfo>;
};

export type Query = {
  __typename?: 'Query';
  getCountries?: Maybe<Array<Maybe<Country>>>;
  getCountriesByName?: Maybe<Array<Maybe<Country>>>;
  getCountriesByRegion?: Maybe<Array<Maybe<Country>>>;
  getFilteredCountries?: Maybe<Array<Maybe<Country>>>;
};


export type QueryGetCountriesByNameArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCountriesByRegionArgs = {
  region?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetFilteredCountriesArgs = {
  filterOptions?: InputMaybe<FilterOptions>;
};

export enum SearchField {
  Currency = 'CURRENCY',
  Language = 'LANGUAGE',
  Name = 'NAME',
  Region = 'REGION'
}

export type Translation = {
  __typename?: 'Translation';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<TranslationValue>;
};

export type TranslationValue = {
  __typename?: 'TranslationValue';
  common?: Maybe<Scalars['String']['output']>;
  official?: Maybe<Scalars['String']['output']>;
};

export type ExampleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleQueryQuery = { __typename?: 'Query', getCountries?: Array<{ __typename?: 'Country', flag?: string | null, borders?: Array<string | null> | null, capital?: Array<string | null> | null, continents?: Array<string | null> | null, population?: number | null, region?: string | null, name?: { __typename?: 'Name', common?: string | null, official?: string | null, nativeName?: Array<{ __typename?: 'NativeName', key?: string | null, value?: { __typename?: 'NativeInfo', official?: string | null, common?: string | null } | null } | null> | null } | null, currencies?: Array<{ __typename?: 'Currency', key?: string | null, value?: { __typename?: 'CurrencyDetail', name?: string | null, symbol?: string | null } | null } | null> | null, maps?: { __typename?: 'Maps', googleMaps?: string | null, openStreetMaps?: string | null } | null, flags?: { __typename?: 'Flags', png?: string | null, svg?: string | null, alt?: string | null } | null, languages?: Array<{ __typename?: 'KeyValue', key?: string | null, value?: string | null } | null> | null } | null> | null };

export type GetFilteredCountriesQueryVariables = Exact<{
  filterOptions?: InputMaybe<FilterOptions>;
}>;


export type GetFilteredCountriesQuery = { __typename?: 'Query', getFilteredCountries?: Array<{ __typename?: 'Country', cca2?: string | null, ccn3?: string | null, cca3?: string | null, cioc?: string | null, independent?: boolean | null, status?: string | null, unMember?: boolean | null, region?: string | null, subregion?: string | null, landlocked?: boolean | null, area?: number | null, flag?: string | null, population?: number | null, fifa?: string | null, startOfWeek?: string | null, continents?: Array<string | null> | null, timezones?: Array<string | null> | null, borders?: Array<string | null> | null, latlng?: Array<number | null> | null, altSpellings?: Array<string | null> | null, capital?: Array<string | null> | null, tld?: Array<string | null> | null, capitalInfo?: { __typename?: 'CapitalInfo', latlng?: Array<number | null> | null } | null, coatOfArms?: { __typename?: 'CoatOfArms', png?: string | null, svg?: string | null } | null, flags?: { __typename?: 'Flags', png?: string | null, svg?: string | null, alt?: string | null } | null, car?: { __typename?: 'Car', side?: string | null, signs?: Array<string | null> | null } | null, maps?: { __typename?: 'Maps', googleMaps?: string | null, openStreetMaps?: string | null } | null, translations?: Array<{ __typename?: 'Translation', key?: string | null, value?: { __typename?: 'TranslationValue', official?: string | null, common?: string | null } | null } | null> | null, idd?: { __typename?: 'Idd', root?: string | null, suffixes?: Array<string | null> | null } | null, currencies?: Array<{ __typename?: 'Currency', key?: string | null, value?: { __typename?: 'CurrencyDetail', name?: string | null, symbol?: string | null } | null } | null> | null, name?: { __typename?: 'Name', common?: string | null, official?: string | null, nativeName?: Array<{ __typename?: 'NativeName', key?: string | null, value?: { __typename?: 'NativeInfo', official?: string | null, common?: string | null } | null } | null> | null } | null, languages?: Array<{ __typename?: 'KeyValue', key?: string | null, value?: string | null } | null> | null } | null> | null };

export type CountriesByNameQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type CountriesByNameQuery = { __typename?: 'Query', getCountriesByName?: Array<{ __typename?: 'Country', flag?: string | null, borders?: Array<string | null> | null, capital?: Array<string | null> | null, timezones?: Array<string | null> | null, continents?: Array<string | null> | null, population?: number | null, region?: string | null, name?: { __typename?: 'Name', common?: string | null, official?: string | null, nativeName?: Array<{ __typename?: 'NativeName', key?: string | null, value?: { __typename?: 'NativeInfo', official?: string | null, common?: string | null } | null } | null> | null } | null, currencies?: Array<{ __typename?: 'Currency', key?: string | null, value?: { __typename?: 'CurrencyDetail', name?: string | null, symbol?: string | null } | null } | null> | null, maps?: { __typename?: 'Maps', googleMaps?: string | null, openStreetMaps?: string | null } | null, flags?: { __typename?: 'Flags', png?: string | null, svg?: string | null, alt?: string | null } | null, languages?: Array<{ __typename?: 'KeyValue', key?: string | null, value?: string | null } | null> | null } | null> | null };

export type GetCountriesByRegionQueryVariables = Exact<{
  region?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCountriesByRegionQuery = { __typename?: 'Query', getCountriesByRegion?: Array<{ __typename?: 'Country', cca2?: string | null, ccn3?: string | null, cca3?: string | null, cioc?: string | null, independent?: boolean | null, status?: string | null, unMember?: boolean | null, region?: string | null, subregion?: string | null, landlocked?: boolean | null, area?: number | null, flag?: string | null, population?: number | null, fifa?: string | null, startOfWeek?: string | null, continents?: Array<string | null> | null, timezones?: Array<string | null> | null, borders?: Array<string | null> | null, latlng?: Array<number | null> | null, altSpellings?: Array<string | null> | null, capital?: Array<string | null> | null, tld?: Array<string | null> | null, capitalInfo?: { __typename?: 'CapitalInfo', latlng?: Array<number | null> | null } | null, coatOfArms?: { __typename?: 'CoatOfArms', png?: string | null, svg?: string | null } | null, flags?: { __typename?: 'Flags', png?: string | null, svg?: string | null, alt?: string | null } | null, car?: { __typename?: 'Car', side?: string | null, signs?: Array<string | null> | null } | null, maps?: { __typename?: 'Maps', googleMaps?: string | null, openStreetMaps?: string | null } | null, translations?: Array<{ __typename?: 'Translation', key?: string | null, value?: { __typename?: 'TranslationValue', official?: string | null, common?: string | null } | null } | null> | null, idd?: { __typename?: 'Idd', root?: string | null, suffixes?: Array<string | null> | null } | null, currencies?: Array<{ __typename?: 'Currency', key?: string | null, value?: { __typename?: 'CurrencyDetail', name?: string | null, symbol?: string | null } | null } | null> | null, name?: { __typename?: 'Name', common?: string | null, official?: string | null, nativeName?: Array<{ __typename?: 'NativeName', key?: string | null, value?: { __typename?: 'NativeInfo', official?: string | null, common?: string | null } | null } | null> | null } | null, languages?: Array<{ __typename?: 'KeyValue', key?: string | null, value?: string | null } | null> | null } | null> | null };


export const ExampleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExampleQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCountries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"common"}},{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"nativeName"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"common"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"flag"}},{"kind":"Field","name":{"kind":"Name","value":"currencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"borders"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"maps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleMaps"}},{"kind":"Field","name":{"kind":"Name","value":"openStreetMaps"}}]}},{"kind":"Field","name":{"kind":"Name","value":"continents"}},{"kind":"Field","name":{"kind":"Name","value":"flags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"png"}},{"kind":"Field","name":{"kind":"Name","value":"svg"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<ExampleQueryQuery, ExampleQueryQueryVariables>;
export const GetFilteredCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFilteredCountries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filterOptions"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFilteredCountries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filterOptions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filterOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cca2"}},{"kind":"Field","name":{"kind":"Name","value":"ccn3"}},{"kind":"Field","name":{"kind":"Name","value":"cca3"}},{"kind":"Field","name":{"kind":"Name","value":"cioc"}},{"kind":"Field","name":{"kind":"Name","value":"independent"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"unMember"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"subregion"}},{"kind":"Field","name":{"kind":"Name","value":"landlocked"}},{"kind":"Field","name":{"kind":"Name","value":"area"}},{"kind":"Field","name":{"kind":"Name","value":"flag"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"fifa"}},{"kind":"Field","name":{"kind":"Name","value":"startOfWeek"}},{"kind":"Field","name":{"kind":"Name","value":"capitalInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latlng"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coatOfArms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"png"}},{"kind":"Field","name":{"kind":"Name","value":"svg"}}]}},{"kind":"Field","name":{"kind":"Name","value":"flags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"png"}},{"kind":"Field","name":{"kind":"Name","value":"svg"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"continents"}},{"kind":"Field","name":{"kind":"Name","value":"timezones"}},{"kind":"Field","name":{"kind":"Name","value":"car"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"side"}},{"kind":"Field","name":{"kind":"Name","value":"signs"}}]}},{"kind":"Field","name":{"kind":"Name","value":"maps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleMaps"}},{"kind":"Field","name":{"kind":"Name","value":"openStreetMaps"}}]}},{"kind":"Field","name":{"kind":"Name","value":"borders"}},{"kind":"Field","name":{"kind":"Name","value":"latlng"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"common"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"altSpellings"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"idd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"root"}},{"kind":"Field","name":{"kind":"Name","value":"suffixes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tld"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"common"}},{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"nativeName"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"common"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetFilteredCountriesQuery, GetFilteredCountriesQueryVariables>;
export const CountriesByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CountriesByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCountriesByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"common"}},{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"nativeName"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"common"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"flag"}},{"kind":"Field","name":{"kind":"Name","value":"currencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"borders"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"maps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleMaps"}},{"kind":"Field","name":{"kind":"Name","value":"openStreetMaps"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezones"}},{"kind":"Field","name":{"kind":"Name","value":"continents"}},{"kind":"Field","name":{"kind":"Name","value":"flags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"png"}},{"kind":"Field","name":{"kind":"Name","value":"svg"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<CountriesByNameQuery, CountriesByNameQueryVariables>;
export const GetCountriesByRegionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountriesByRegion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"region"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCountriesByRegion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"region"},"value":{"kind":"Variable","name":{"kind":"Name","value":"region"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cca2"}},{"kind":"Field","name":{"kind":"Name","value":"ccn3"}},{"kind":"Field","name":{"kind":"Name","value":"cca3"}},{"kind":"Field","name":{"kind":"Name","value":"cioc"}},{"kind":"Field","name":{"kind":"Name","value":"independent"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"unMember"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"subregion"}},{"kind":"Field","name":{"kind":"Name","value":"landlocked"}},{"kind":"Field","name":{"kind":"Name","value":"area"}},{"kind":"Field","name":{"kind":"Name","value":"flag"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"fifa"}},{"kind":"Field","name":{"kind":"Name","value":"startOfWeek"}},{"kind":"Field","name":{"kind":"Name","value":"capitalInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latlng"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coatOfArms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"png"}},{"kind":"Field","name":{"kind":"Name","value":"svg"}}]}},{"kind":"Field","name":{"kind":"Name","value":"flags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"png"}},{"kind":"Field","name":{"kind":"Name","value":"svg"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"continents"}},{"kind":"Field","name":{"kind":"Name","value":"timezones"}},{"kind":"Field","name":{"kind":"Name","value":"car"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"side"}},{"kind":"Field","name":{"kind":"Name","value":"signs"}}]}},{"kind":"Field","name":{"kind":"Name","value":"maps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleMaps"}},{"kind":"Field","name":{"kind":"Name","value":"openStreetMaps"}}]}},{"kind":"Field","name":{"kind":"Name","value":"borders"}},{"kind":"Field","name":{"kind":"Name","value":"latlng"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"common"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"altSpellings"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"idd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"root"}},{"kind":"Field","name":{"kind":"Name","value":"suffixes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tld"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"common"}},{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"nativeName"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"common"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetCountriesByRegionQuery, GetCountriesByRegionQueryVariables>;