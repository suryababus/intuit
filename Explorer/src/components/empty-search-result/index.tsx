import { SearchIcon } from "../icons/search";

export default function EmptySearchResult() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <SearchIcon className="h-12 w-12 text-gray-400" />
      <div className="text-center">
        <h3 className="text-lg font-semibold">No results found</h3>
        <p className="text-gray-500 dark:text-gray-400">
          Sorry, we couldn't find any matches for your search query.
        </p>
      </div>
    </div>
  );
}
