import { useEffect, useState } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY;

interface SpotifyData {
  genres: {
    contents: {
      items: {
        description:string;
        id: string;
        name: string;
        images:{
            url: string;
        }[][];
        trackCount: number;
      }[]; // Replace `any` with a more specific type if possible
    };
    id: string;
    name: string;
  }[];
  // ... include other properties expected from the API
}

const useFetch = (endpoint: string, query: {}) => {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    // url: `https://spotify-scraper.p.rapidapi.com/v1/${endpoint}`,
    url: "https://spotify-scraper.p.rapidapi.com/v1/home",
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "361e66dd93mshdac60e431774172p1c8399jsnfb602273dfb1",
      "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
