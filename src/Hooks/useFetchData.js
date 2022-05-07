import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (category, searchQuery) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const options = {
          method: "GET",
          url: `https://google-search3.p.rapidapi.com/api/v1/${category}/q=${searchQuery}`,
          headers: {
            "X-User-Agent": "desktop",
            "X-Proxy-Location": "EU",
            "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
            "X-RapidAPI-Key":
              "f7ead57899msh6752449c2b465c7p14241cjsnd33eb440d9ed",
          },
        };

        const { data } = await axios.request({ ...options });

        setData(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return [data, loading];
};

export default useFetchData;
