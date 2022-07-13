import { useQuery } from "react-query";

const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = async () => {
  const res = await fetch(`${API_URL}`, {
    headers: {
      Accept: "application/json",
    },
  });

  return res.json();
};

const useJoke = () => {
  return useQuery("joke", fetchJoke);
};

export default useJoke;
