import { useCallback, useEffect, useState } from "react";
import { CountryModal } from "./country-modal";
import { debounce } from "../../utils/debounce";
import { SearchIcon } from "../icons/search";
import EmptySearchResult from "../empty-search-result";
import { CountryCardList } from "./country-card-list";
import { Dropdown, Option } from "../UI/dropdown";
import { useGetFilteredCountries } from "../../hooks/queries/useFilterCountries";

const searchFieldOptions = [
  { value: "NAME", label: "Name" },
  { value: "REGION", label: "Region" },
  { value: "LANGUAGE", label: "Languages" },
  { value: "CURRENCY", label: "Currencies" },
];

export const BrowseCountries = () => {
  // const { loading, data } = useCountries();
  const [getFilteredCountries, { loading: countryLoading, data }] =
    useGetFilteredCountries();
  const [searchField, setSearchField] = useState<Option>(searchFieldOptions[0]);

  const [searchKey, setSearchKey] = useState("");

  const debounceSearchHandler = useCallback(
    debounce((key, field) => {
      getFilteredCountries({
        variables: {
          filterOptions: {
            field,
            value: key,
          },
        },
      });
    }, 500),
    []
  );

  useEffect(() => {
    debounceSearchHandler(searchKey, searchField.value);
  }, [searchKey, searchField, debounceSearchHandler]);

  const loading = countryLoading;

  const countryList = data?.getFilteredCountries ?? [];

  return (
    <div className="flex-1 w-full h-full flex items-center flex-col ">
      <div className="flex flex-row  max-w-1/4 justify-center items-center bg-input p-2 rounded-md m-4 gap-2 ">
        <SearchIcon className="h-5 w-5 font-bold text-gray-400 m-2" />
        <div className="border-[1px] border-gray-400 rounded-md h-10 " />
        <input
          className="text-xl p-2  bg-input flex-1 rounded-md"
          onChange={(e) => setSearchKey(e.target.value)}
          value={searchKey}
          placeholder="Search..."
        />
        <div className="border-[1px] border-gray-400 rounded-md h-10 " />
        <Dropdown
          onChange={setSearchField}
          options={searchFieldOptions}
          value={searchField}
        />
      </div>
      {loading ? (
        <CountryCardLoading />
      ) : countryList.length > 0 ? (
        <CountryCardList data={countryList} />
      ) : (
        <EmptySearchResult />
      )}
      <CountryModal />
    </div>
  );
};

function CountryCardLoading() {
  return (
    <div className="grid grid-cols-3 auto-cols-auto gap-4 w-full max-w-6xl  overflow-y-scroll m-4 mt-0 pb-28  p-8 pt-0 h-auto">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="max-w-sm bg-muted/80 animate-pulse shadow-xl rounded-lg h-56 flex-1"
            data-testid="country-card-loading"
          />
        ))}
    </div>
  );
}
