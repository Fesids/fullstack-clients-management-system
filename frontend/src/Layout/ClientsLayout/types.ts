import { ClientsData } from "../../components/ClientList/types";

export enum SortTypes {
  HIGH_TO_LOW_DATE = "Data: Atual para Antigo",
  LOW_TO_HIGH_DATE = "Data: Antigo para Atual",
  ALPHA_SORT = "Ordem alfabética",
  NONE = "",
}

// }
export interface FilterTypes {
  clientName: string;
  email: string;
  category: string[];
  priceRange: string;
  rating: string;
  sortBy: SortTypes;
  [key: string]: string | string[];
}
export interface FilterBarProps {}

export interface ClientLayoutProps {
  clients: ClientsData[];
}
