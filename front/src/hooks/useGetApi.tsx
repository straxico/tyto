import { useState, useEffect } from 'react';
import API from 'api/axios';

const useGetApi = (url: string) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const result = await API(url);
      setData(result.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};
export default useGetApi;
