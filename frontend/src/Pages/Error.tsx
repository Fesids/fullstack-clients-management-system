interface ErrorPageProps {
  onReload: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ onReload }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-red-500 mb-4">
        Algo de errado. Por favor, confira se a API e o banco de dados estão
        funcionando.
      </p>
      <p className="text-red-500 mb-4">
        ** obs: certifique-se que existe ao menos um cliente cadastrado
      </p>
      <button
        onClick={onReload}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Recarregar
      </button>
    </div>
  );
};

export default ErrorPage;
