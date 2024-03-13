import { useRef, useState } from "react";
import SuccessMessage from "../SuccessMessage";
import { NewClienteData } from "./types";
import { createClient } from "../../context/ApiContext/ApiContextProvider";
import { mainURl } from "../../constants/url";

const CreateForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  // dados form
  const nameRef = useRef({} as any);
  const emailRef = useRef({} as any);
  const phoneRef = useRef({} as any);
  const longRef = useRef({} as any);
  const latRef = useRef({} as any);

  const body: NewClienteData = {
    name: nameRef.current.value,
    email: emailRef.current.value,
    phone: phoneRef.current.value,
    longX: Number(longRef.current.value),
    latY: Number(latRef.current.value),
  };

  //console.log(body);

  const handleCreateNewClient = async (e: any) => {
    e.preventDefault();
    createClient(mainURl, body);
    setShowSuccess(true);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-600">
        Insira o dados do cliente
      </h2>
      <p className="text-sm">Se atente a gráfia das palavras</p>
      <form
        className="max-w-sm mx-auto mt-5"
        onSubmit={(e) => handleCreateNewClient(e)}
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nome do cliente
          </label>
          <input
            ref={nameRef}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="nome"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email do cliente
          </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Telefone do cliente
          </label>
          <input
            ref={phoneRef}
            type="text"
            placeholder="telefone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-600 mb-4 mt-3">
          Insira as coordenadas de indereço do cliente
        </h2>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Longitude (x)
          </label>
          <input
            ref={longRef}
            type="number"
            placeholder="longitude"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Latitude (Y)
          </label>
          <input
            ref={latRef}
            type="number"
            placeholder="latitude"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => handleCreateNewClient(e)}
        >
          Cadastrar
        </button>
      </form>
      {showSuccess && <SuccessMessage close={() => setShowSuccess(false)} />}
    </div>
  );
};

export default CreateForm;
