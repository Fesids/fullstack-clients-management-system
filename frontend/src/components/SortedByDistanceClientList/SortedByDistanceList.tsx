import { sortedClient } from "./types";

interface props {
  list?: sortedClient[];
}
const SortedByDistanceList = ({ list }: props) => {
  return (
    <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-600">
      {list
        ? list.map((client) => (
            <li className="mb-5 border-solid border-b-2 border-gray-200 py-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Cliente: {client.name}
              </h3>
              <p className="font-semibold text-gray-900 dark:text-white">
                longitude (x) : {client.cordenates[0]} - Latitude (y) :{" "}
                {client.cordenates[1]}
              </p>{" "}
              Distância da sede da empresa :{" "}
              <span className="text-gray-600">{client.distance}</span>
            </li>
          ))
        : "Nenhum cliente encontrado"}
    </ol>
  );
};

export default SortedByDistanceList;
