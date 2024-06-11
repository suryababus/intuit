import { createFileRoute } from "@tanstack/react-router";
import { BrowseCountries } from "../components/browse-countries";
import { ErrorBoundry } from "../components/ErrorBoundry";

export const Route = createFileRoute("/countries")({
  component: () => (
    <ErrorBoundry>
      <BrowseCountries />
    </ErrorBoundry>
  ),
});
