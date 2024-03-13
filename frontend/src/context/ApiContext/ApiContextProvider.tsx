import { useQuery } from "@tanstack/react-query";
import { mainURl } from "../../constants/url";
import { ClientsContext, ClientsContextProps } from "./ApiContext";
import { ClientsData } from "../../components/ClientList/types";
import axios from "axios";
import { NewClienteData } from "../../components/CreateForm/types";

export const fetchData = async (url: string) => {
  const response = await axios.get(url);
  if (response.status) {
    return response.data;
  } else {
    console.log("Failed to fetch clients data");
  }
};

export const createClient = async (url: string, body: NewClienteData) => {
  await axios.post(url, body).then((response) => console.log(response.data));
};

export const ClientContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const {
    data: clients,
    isLoading: isLoadingClients,
    isError: isErrorClients,
    refetch: refetchClients,
  } = useQuery<ClientsData[], Error>({
    queryKey: ["clients"],
    queryFn: () => fetchData(mainURl), //fetchData(mainURl + 'courses'),
  });

  const value: ClientsContextProps = {
    clients,
    isLoadingClients,
    isErrorClients,

    refetchClients,
  };

  return (
    <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>
  );
};
