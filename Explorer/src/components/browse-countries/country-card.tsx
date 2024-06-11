import { formatNumberString } from "../../utils/format-number";
import { GlobeIcon } from "../icons/globe";
import { MapPinIcon } from "../icons/map-pin";
import { UsersIcon } from "../icons/user";

type CountryProps = {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
  onPress?: () => void;
};

export function CountryCard(props: CountryProps) {
  const { name, flag, population, region, capital, onPress } = props;
  return (
    <div
      className="w-full max-w-sm p-6 rounded-lg bg-card shadow-lg  hover:scale-[1.02] transition-all"
      onClick={onPress}
      data-testid={`country-card-${name}`}
    >
      <div className="flex items-center space-x-4">
        <img
          src={flag}
          width={40}
          height={30}
          alt="Flag"
          className="rounded-md"
        />
        <h2 className="text-xl font-bold text-foreground ">{name}</h2>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center space-x-2">
          <UsersIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <p className="text-gray-700 dark:text-gray-400">
            Population: {formatNumberString(population)}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <GlobeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <p className="text-gray-700 dark:text-gray-400">Region: {region}</p>
        </div>
        <div className="flex items-center space-x-2">
          <MapPinIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <p className="text-gray-700 dark:text-gray-400">Capital: {capital}</p>
        </div>
      </div>
    </div>
  );
}
