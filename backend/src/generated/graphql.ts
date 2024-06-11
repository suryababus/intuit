import { GraphQLResolveInfo } from 'graphql';
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CapitalInfo: ResolverTypeWrapper<CapitalInfo>;
  Car: ResolverTypeWrapper<Car>;
  CoatOfArms: ResolverTypeWrapper<CoatOfArms>;
  Country: ResolverTypeWrapper<Country>;
  Currency: ResolverTypeWrapper<Currency>;
  CurrencyDetail: ResolverTypeWrapper<CurrencyDetail>;
  FilterOptions: FilterOptions;
  Flags: ResolverTypeWrapper<Flags>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Idd: ResolverTypeWrapper<Idd>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  KeyValue: ResolverTypeWrapper<KeyValue>;
  Maps: ResolverTypeWrapper<Maps>;
  Name: ResolverTypeWrapper<Name>;
  NativeInfo: ResolverTypeWrapper<NativeInfo>;
  NativeName: ResolverTypeWrapper<NativeName>;
  Query: ResolverTypeWrapper<{}>;
  SearchField: SearchField;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Translation: ResolverTypeWrapper<Translation>;
  TranslationValue: ResolverTypeWrapper<TranslationValue>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CapitalInfo: CapitalInfo;
  Car: Car;
  CoatOfArms: CoatOfArms;
  Country: Country;
  Currency: Currency;
  CurrencyDetail: CurrencyDetail;
  FilterOptions: FilterOptions;
  Flags: Flags;
  Float: Scalars['Float']['output'];
  Idd: Idd;
  Int: Scalars['Int']['output'];
  KeyValue: KeyValue;
  Maps: Maps;
  Name: Name;
  NativeInfo: NativeInfo;
  NativeName: NativeName;
  Query: {};
  String: Scalars['String']['output'];
  Translation: Translation;
  TranslationValue: TranslationValue;
};

export type CapitalInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CapitalInfo'] = ResolversParentTypes['CapitalInfo']> = {
  latlng?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Car'] = ResolversParentTypes['Car']> = {
  side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoatOfArmsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CoatOfArms'] = ResolversParentTypes['CoatOfArms']> = {
  png?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  svg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  altSpellings?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  area?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  borders?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  capital?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  capitalInfo?: Resolver<Maybe<ResolversTypes['CapitalInfo']>, ParentType, ContextType>;
  car?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType>;
  cca2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cca3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccn3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cioc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coatOfArms?: Resolver<Maybe<ResolversTypes['CoatOfArms']>, ParentType, ContextType>;
  continents?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  currencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Currency']>>>, ParentType, ContextType>;
  fifa?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flags?: Resolver<Maybe<ResolversTypes['Flags']>, ParentType, ContextType>;
  idd?: Resolver<Maybe<ResolversTypes['Idd']>, ParentType, ContextType>;
  independent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  landlocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyValue']>>>, ParentType, ContextType>;
  latlng?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  maps?: Resolver<Maybe<ResolversTypes['Maps']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Name']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startOfWeek?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subregion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezones?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  tld?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  translations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Translation']>>>, ParentType, ContextType>;
  unMember?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['CurrencyDetail']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrencyDetail'] = ResolversParentTypes['CurrencyDetail']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlagsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Flags'] = ResolversParentTypes['Flags']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  png?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  svg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IddResolvers<ContextType = any, ParentType extends ResolversParentTypes['Idd'] = ResolversParentTypes['Idd']> = {
  root?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffixes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyValue'] = ResolversParentTypes['KeyValue']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MapsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Maps'] = ResolversParentTypes['Maps']> = {
  googleMaps?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  openStreetMaps?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NameResolvers<ContextType = any, ParentType extends ResolversParentTypes['Name'] = ResolversParentTypes['Name']> = {
  common?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nativeName?: Resolver<Maybe<Array<Maybe<ResolversTypes['NativeName']>>>, ParentType, ContextType>;
  official?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NativeInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['NativeInfo'] = ResolversParentTypes['NativeInfo']> = {
  common?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  official?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NativeNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['NativeName'] = ResolversParentTypes['NativeName']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['NativeInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCountries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType>;
  getCountriesByName?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType, Partial<QueryGetCountriesByNameArgs>>;
  getCountriesByRegion?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType, Partial<QueryGetCountriesByRegionArgs>>;
  getFilteredCountries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType, Partial<QueryGetFilteredCountriesArgs>>;
};

export type TranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Translation'] = ResolversParentTypes['Translation']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['TranslationValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TranslationValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['TranslationValue'] = ResolversParentTypes['TranslationValue']> = {
  common?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  official?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CapitalInfo?: CapitalInfoResolvers<ContextType>;
  Car?: CarResolvers<ContextType>;
  CoatOfArms?: CoatOfArmsResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  CurrencyDetail?: CurrencyDetailResolvers<ContextType>;
  Flags?: FlagsResolvers<ContextType>;
  Idd?: IddResolvers<ContextType>;
  KeyValue?: KeyValueResolvers<ContextType>;
  Maps?: MapsResolvers<ContextType>;
  Name?: NameResolvers<ContextType>;
  NativeInfo?: NativeInfoResolvers<ContextType>;
  NativeName?: NativeNameResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Translation?: TranslationResolvers<ContextType>;
  TranslationValue?: TranslationValueResolvers<ContextType>;
};

