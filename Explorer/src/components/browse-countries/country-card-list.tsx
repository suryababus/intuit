import { Country } from "../../__generated__/graphql";
import { useSelectedCountry } from "../../hooks/states/useSelectedCountry";
import { CountryCard } from "./country-card";

type CountryCardsProps = {
  data: (Country | null)[];
};

export function CountryCardList({ data }: CountryCardsProps) {
  const { setSelectedCountry } = useSelectedCountry();

  const onPress = (country: Country | null) => {
    setSelectedCountry(country);
  };

  if (!data) {
    throw Promise.resolve();
  }

  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 auto-cols-auto gap-4 w-full max-w-6xl  overflow-y-scroll m-4 mt-0 pb-28  p-8 pt-0 h-auto">
      {data?.map((country) => (
        <CountryCard
          key={country?.name?.common ?? ""}
          capital={country?.capital?.join(", ") ?? "-"}
          name={country?.name?.common ?? "-"}
          flag={country?.flags?.png ?? "-"}
          population={country?.population ?? 0}
          region={country?.region ?? "-"}
          onPress={() => onPress(country)}
        />
      ))}
    </div>
  );
}
