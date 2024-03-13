import { createContext, useContext } from "react";
import { ClientsData } from "../../components/ClientList/types";
// Import your data fetching function

export interface ClientsContextProps {
  clients: ClientsData[] | undefined;

  isLoadingClients: boolean;
  isErrorClients: boolean;

  refetchClients: () => void;
}

export const ClientsContext = createContext<ClientsContextProps | undefined>(
  undefined
);

export const useClientsContext = (): ClientsContextProps => {
  const context = useContext(ClientsContext);
  if (!context) {
    throw new Error(
      "useClientContext must be used within a ClientContextProvider"
    );
  }
  return context;
};
