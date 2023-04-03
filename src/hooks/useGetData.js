import { useState, useEffect } from "react";
import { getData } from "../api/data";

function useGetData(initialState) {
  const [data, setData] = useState(initialState || null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const res = await getData();
      setData(res);
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    data,
    error,
  };
}

export default useGetData;
