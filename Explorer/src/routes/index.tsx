import { createFileRoute } from "@tanstack/react-router";
import { Globe } from "../components/globe";
import { EarthDescription } from "../components/earth-description";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="text-3xl h-full w-full flex justify-center items-center">
      <div className="flex flex-col sm:flex-row flex-1 h-full w-full overflow-scroll">
        <EarthDescription />
        <Globe />
      </div>
    </div>
  );
}
