import { create } from "zustand";
import { Country } from "../../__generated__/graphql";

type SelectedCountry = {
  selectedCountry: Country | null;
  setSelectedCountry: (country: Country | null) => void;
};

export const useSelectedCountry = create<SelectedCountry>((set) => ({
  selectedCountry: null,
  setSelectedCountry: (country) => set({ selectedCountry: country }),
}));
