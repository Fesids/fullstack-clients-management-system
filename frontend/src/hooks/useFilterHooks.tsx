import { useCallback } from "react";
import { useFilterContext } from "../context/FilterContext/FilterContext";
import { SortTypes } from "../Layout/ClientsLayout/types";

export const useFilterHooks = () => {
  const { filters, setFilters } = useFilterContext();

  const handleDynamcValue = (name: string) => {
    return filters[name];
  };

  const setFilterValue = useCallback((name: string, value: string) => {
    setFilters((state: any) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleFilterChange = useCallback((e: any) => {
    switch (e.type) {
      case "click": {
        setFilterValue(e.target.title, e.target.innerText);
        break;
      }
      default:
        setFilterValue(e.target.name, e.target.value);
    }
  }, []);

  const selectCategory = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilters((state: any) => ({
        ...state,
        category: e.target.checked
          ? [...state.category, e.target.name]
          : state.category.filter((cat: any) => cat !== e.target.name),
      }));
    },
    [setFilters]
  );

  const selectModality = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilters((state: any) => ({
        ...state,
        modality: e.target.checked
          ? [...state.modality, e.target.name]
          : state.modality.filter((mod: any) => mod !== e.target.name),
      }));
    },
    [setFilters]
  );

  const handleResetFilter = useCallback(() => {
    setFilters({
      clientName: "",
      email: "",
      category: [],
      priceRange: "",
      modality: [],
      rating: "",
      sortBy: SortTypes.NONE,
    });
  }, [setFilters]);

  return {
    clientName: filters.clientName,
    email: filters.email,
    priceRange: filters.priceRange,
    handleFilterChange,
    handleResetFilter,
    selectCategory,
    selectModality,
    selectedCategory: filters.category,
    selectedModality: filters.modality,
    rating: filters.rating,
    sortValue: filters.sortBy,
    handleDynamcValue,
  };
};
