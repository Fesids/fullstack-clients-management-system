import { useMemo } from "react";
import Filters from "../../components/Filters";
import { filterAndSortClients } from "../../helpers/FilterHelper";
import { useFilterContext } from "../../context/FilterContext/FilterContext";
import { useClientHook } from "../../hooks/useClientHook";
import ClientList from "../../components/ClientList";

import { ClientsData } from "../../components/ClientList/types";

const ClientLayout = () => {
  const { clients } = useClientHook();
  const { filters } = useFilterContext();

  const filteredAndSortedClients = useMemo(
    () => filterAndSortClients(clients as ClientsData[], filters),
    [clients, filters]
  );

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <Filters>
        <ClientList clients={filteredAndSortedClients} />
      </Filters>
    </div>
  );
};

export default ClientLayout;
