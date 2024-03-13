import { useEffect, useState } from "react";
import Client from "../Client";
import { ClientsData } from "./types";
import MyModal from "../../Modal";
import CreateForm from "../CreateForm";
import SortedByDistanceList from "../SortedByDistanceClientList";
import { fetchData } from "../../context/ApiContext/ApiContextProvider";
import { mainURl } from "../../constants/url";
import { sortedClient } from "../SortedByDistanceClientList/types";

function ClientsList(props: { clients: ClientsData[] }) {
  const { clients } = props;
  const [showModal, setShowModal] = useState(false);

  const [sortedData, setSortedData] = useState([] as Array<sortedClient>);

  const [showSortedClientList, setShowSortedClientList] = useState(false);

  useEffect(() => {
    fetchData(mainURl + "/sorted").then((resp) => setSortedData(resp));
  }, [sortedData]);

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  const handleShowSortedClientList = () => {
    setShowSortedClientList(!showSortedClientList);
  };

  return (
    <div className="bg-white">
      <div className=" px-2 py-16 sm:px-6 sm:py-12 lg:px-8 flex flex-col gap-8">
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <div
            className="hover:bg-orange-200 px-2 py-4 rounded-lg w-auto flex justify-center"
            onClick={() => setShowModal(true)}
          >
            <p className="text-orange-500 font-semibold">
              + Cadastrar novo cliente
            </p>
          </div>

          <div
            className="hover:bg-orange-200 px-2 py-4 rounded-lg w-auto flex justify-center"
            onClick={() => setShowSortedClientList(true)}
          >
            <p className="text-orange-500 font-semibold">
              Mostrar rota por distância
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {clients?.map((course) => (
            <Client key={course.id} client={course} />
          ))}
        </div>
      </div>

      {/** modal de criar um novo usuário */}
      {showModal && (
        <MyModal
          isOpen={showModal}
          closeModal={handleCloseModal}
          openModal={handleCloseModal}
        >
          <CreateForm />
        </MyModal>
      )}

      {/** modal rotas  */}
      {showSortedClientList && (
        <MyModal
          isOpen={showSortedClientList}
          closeModal={handleShowSortedClientList}
          openModal={handleShowSortedClientList}
        >
          <SortedByDistanceList list={sortedData} />
        </MyModal>
      )}
    </div>
  );
}

export default ClientsList;

{
  /*<MyModal
          isOpen={showModal}
          closeModal={handleCloseModal}
          openModal={handleCloseModal}
        >
          <CreateForm />
      </MyModal>*/
}
