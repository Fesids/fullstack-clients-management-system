import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { ClientContextProvider } from "./context/ApiContext/ApiContextProvider";
import Loader from "./components/Loader";

const Home = lazy(() => import("./Pages/Home"));

const FilterPage: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ClientContextProvider>
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      </ClientContextProvider>
    </QueryClientProvider>
  );
};

export default FilterPage;
