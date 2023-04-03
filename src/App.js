import TeslaTable from "./components/TeslaTable";
import useGetData from "./hooks/useGetData";
import "./App.css";

function App() {
  const { data, isLoading, error } = useGetData();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return <TeslaTable data={data} />;
}

export default App;
