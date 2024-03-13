import { FilterTypes, SortTypes } from "../Layout/ClientsLayout/types";
import { ClientsData } from "../components/ClientList/types";

export const filterAndSortClients = (
  clients: ClientsData[],
  filters: FilterTypes
): ClientsData[] => {
  const filteredClients = clients.filter((client) => {
    // Check if product name contains the filter
    if (
      filters.clientName &&
      !client.name.toLowerCase().includes(filters.clientName.toLowerCase())
    ) {
      return false;
    }

    if (
      filters.email &&
      !client.email.toLowerCase().includes(filters.email.toLowerCase())
    ) {
      return false;
    }

    // Check if the product belongs to the selected categories
    if (
      filters.category.length > 0 &&
      !filters.category.includes(client.email)
    ) {
      return false;
    }

    // Check if the product belongs to the selected modality
    if (
      filters.modality.length > 0 &&
      !filters.modality.includes(client.email)
    ) {
      return false;
    }

    // Check if the product's price is within the specified range
    if (
      filters.priceRange &&
      !isPriceInRange(client.createdat, filters.priceRange)
    ) {
      return false;
    }

    // Check if the product's rating matches the selected rating
    if (
      filters.rating &&
      customRound(client.createdat) !== parseInt(filters.rating)
    ) {
      return false;
    }

    return true;
  });

  // Sorting based on sortBy criteria
  return sortClients(filteredClients, filters.sortBy);
};
const isPriceInRange = (price: number, range: string): boolean => {
  const min = 0;
  const max = parseInt(range);
  return !isNaN(0) && !isNaN(max) && price >= min && price <= max;
};

export function customRound(number: number) {
  const decimalPart = number - Math.floor(number);

  if (decimalPart >= 0.5) {
    return Math.ceil(number);
  } else {
    return Math.floor(number);
  }
}
const sortClients = (
  clients: ClientsData[],
  sortBy: SortTypes
): ClientsData[] => {
  switch (sortBy) {
    case SortTypes.HIGH_TO_LOW_DATE:
      return clients
        .slice()
        .sort((a, b) => b.createdat - a.createdat)
        .reverse();

    case SortTypes.LOW_TO_HIGH_DATE:
      return clients.slice().sort((a, b) => a.createdat - b.createdat);
    case SortTypes.ALPHA_SORT:
      return clients.slice().sort((a, b) => {
        var nameA = a.name.toLowerCase(); // ignore upper and lowercase
        var nameB = b.name.toLowerCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1; //nameA comes first
        }
        if (nameA > nameB) {
          return 1; // nameB comes first
        }
        return 0;
      });
    //.sort((a, b) => b.popularity.rate - a.popularity.rate);
    case SortTypes.NONE:
      return clients;
    default:
      return clients;
  }
};
