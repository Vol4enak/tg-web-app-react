import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError("Ошибка при получении данных");
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromAPI();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;