import React from "react";
import { ClientsData } from "../ClientList/types";

const Client = ({ client }: { client: ClientsData }) => {
  return (
    <div
      className="cursor-pointer border-t-4 border-gray-500 rounded-lg h-auto"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-2">
        <i className="fas fa-user text-xl"></i>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Nome</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {client.name}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Endereço de email
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {client.email}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Telefone</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {client.phone}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Coordenadas</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 col-span-2 px-3">
              [ {client.cordenates[0]} - {client.cordenates[1]} ]
            </dd>
          </div>
        </dl>
      </div>

      <div className="flex gap-1 "></div>
    </div>
  );
};

export default React.memo(Client);

{
  /*<MyModal
          isOpen={openModal}
          openModal={handleOpenModal}
          closeModal={handleCloseModal}
        >
          
          </div>
      </MyModal>*/
}
