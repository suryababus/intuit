import { useSelectedCountry } from "../../hooks/states/useSelectedCountry";
import { formatNumberString } from "../../utils/format-number";
import { GlobeIcon } from "../icons/globe";
import { MapPinIcon } from "../icons/map-pin";

export function CountryModal() {
  const { selectedCountry, setSelectedCountry } = useSelectedCountry();
  if (!selectedCountry) return <></>;

  const onPressOutSide = () => {
    setSelectedCountry(null);
  };
  return (
    <div
      className="absolute top-0 h-screen w-screen flex items-center justify-center bg-black/50 "
      onClick={onPressOutSide}
    >
      <div
        className="w-full max-w-xl h-5/6 shadow-xl bg-muted rounded-xl max-h-full overflow-scroll"
        data-testid="country-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selectedCountry?.flags?.png ?? ""}
          alt="Country Flag"
          className="rounded-t-lg w-full  object-cover"
        />
        <div className="grid gap-6 p-6">
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold">
              {selectedCountry?.name?.common}
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <GlobeIcon className="w-4 h-4" />
              {selectedCountry?.region} ({selectedCountry.timezones?.join(", ")}
              )
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1">
              <div className="font-medium">Population</div>
              <div className="text-gray-400">
                {formatNumberString(selectedCountry?.population ?? 0)}
              </div>
            </div>
            <div className="grid gap-1">
              <div className="font-medium">Capital</div>
              <div className="text-gray-400">
                {selectedCountry?.capital?.join(", ") ?? ""}
              </div>
            </div>
            <div className="grid gap-1">
              <div className="font-medium">Native Name</div>

              <div className=" text-sm text-gray-400">
                {selectedCountry?.name?.nativeName
                  ?.map((n) => n?.value?.official)
                  .join(", ")}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-medium">Currencies</div>
              <div className="text-gray-400">
                {selectedCountry?.currencies
                  ?.map((c) => c?.value?.name)
                  .join(", ")}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1">
              <div className="font-medium">Languages</div>
              <div className="text-gray-400">
                {selectedCountry?.languages?.map((l) => l?.value).join(", ")}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-medium">Border Countries</div>
              <div className="flex flex-wrap gap-2 text-sm text-gray-400 ">
                {selectedCountry?.borders?.length
                  ? selectedCountry?.borders?.map((border) => (
                      <div className=" text-sm text-gray-400" key={border}>
                        {border}
                      </div>
                    ))
                  : "No borders"}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1">
              {selectedCountry?.maps?.googleMaps && (
                <GoogleMapLink
                  url={selectedCountry?.maps?.googleMaps ?? ""}
                  mapName="Google Maps"
                />
              )}
            </div>
            <div className="grid gap-1">
              {selectedCountry?.maps?.googleMaps && (
                <GoogleMapLink
                  url={selectedCountry?.maps?.openStreetMaps ?? ""}
                  mapName="Open Street Maps"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type GoogleMapLinkProps = {
  url: string;
  mapName: string;
};

export default function GoogleMapLink({ url, mapName }: GoogleMapLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="inline-flex items-center justify-center rounded-md
       bg-primary px-4 py-2 text-sm font-medium text-primaryForeground shadow transition-colors  "
    >
      <MapPinIcon className="mr-2 h-4 w-4" />
      See on {mapName}
    </a>
  );
}
