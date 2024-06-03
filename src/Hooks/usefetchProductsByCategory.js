import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProductsByCategory = (category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/products?category=${category}`
        );
        setData(response.data);
      } catch (error) {
        setError("Ошибка при получении данных");
      } finally {
        setLoading(false);
      }
    };
    fetchDataFromAPI();
  }, [category]);

  return { data, loading, error };
};

export default useFetchProductsByCategory;
