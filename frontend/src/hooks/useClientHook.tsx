import { useClientsContext } from "../context/ApiContext/ApiContext";

export const useClientHook = () => {
  const { clients, isLoadingClients, isErrorClients, refetchClients } =
    useClientsContext();

  const handleReload = () => {
    refetchClients();
  };
  return {
    loading: isLoadingClients,
    error: isErrorClients,
    clients,
    handleReload,
  };
};
