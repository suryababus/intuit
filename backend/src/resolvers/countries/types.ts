export type CountryResponse = {
  name: Partial<Name>;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Partial<Idd>;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: Gini;
  fifa: string;
  car: Partial<Car>;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: Partial<CoatOfArms>;
  startOfWeek: string;
  capitalInfo: Partial<CapitalInfo>;
} & {
  [key: string]: any;
};

interface CapitalInfo {
  latlng: number[];
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

interface Car {
  signs: string[];
  side: string;
}

type Gini = Record<string, number>;

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

type Demonyms = Record<string, Eng>;

interface Eng {
  f: string;
  m: string;
}

type Translations = Record<string, Detail>;

type Languages = Record<string, string>;

interface Idd {
  root: string;
  suffixes: string[];
}

type Currencies = Record<string, Partial<CurrencyDetails>>;

interface CurrencyDetails {
  name: string;
  symbol: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

type NativeName = Record<string, Detail>;

interface Detail {
  official: string;
  common: string;
}
