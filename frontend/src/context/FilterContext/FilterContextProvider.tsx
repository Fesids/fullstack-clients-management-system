import { useMemo, useState } from "react";
import { FilterTypes, SortTypes } from "../../Layout/ClientsLayout/types";
import { FilterContext } from "./FilterContext";

const FilterContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [filters, setFilters] = useState<FilterTypes>({
    clientName: "",
    email: "",
    category: [],
    priceRange: "",
    rating: "",
    modality: [],
    sortBy: SortTypes.NONE,
  });

  const contextValue = useMemo(
    () => ({ filters, setFilters }),
    [filters, setFilters]
  );

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
