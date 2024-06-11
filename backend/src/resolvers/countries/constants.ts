import axios from "axios";

export const restCountries = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const fields = [
  "name",
  "flag",
  "currencies",
  "borders",
  "capital",
  "maps",
  "continents",
  "flags",
  "population",
  "region",
  "languages",
];
