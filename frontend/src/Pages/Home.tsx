import ClientLayout from "../Layout/ClientsLayout";
import Loader from "../components/Loader";
import ClientContextProvider from "../context/FilterContext";
import { useClientHook } from "../hooks/useClientHook";
import ErrorPage from "./Error";

const Home = () => {
  const { clients, loading, error, handleReload } = useClientHook();

  {
    if (loading) {
      return <Loader />;
    }
  }
  if (error) {
    return <ErrorPage onReload={handleReload} />;
  }
  if (clients) {
    return (
      <ClientContextProvider>
        <div className="relative">
          <ClientLayout />
        </div>
      </ClientContextProvider>
    );
  }
};

export default Home;
