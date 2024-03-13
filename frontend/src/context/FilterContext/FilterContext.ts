import React, { createContext, useContext } from "react";
import { FilterTypes } from "../../Layout/ClientsLayout/types";

interface FilterContextProps {
  filters: FilterTypes;
  setFilters: React.Dispatch<React.SetStateAction<FilterTypes>>;
}

export const FilterContext = createContext<FilterContextProps | undefined>(
  undefined
);

export const useFilterContext = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      "useClientContext must be used within a ClientContextProvider"
    );
  }
  return context;
};
