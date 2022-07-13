import React from "react";
import useJoke from "../hooks/useJoke";
import Joke from "./Joke";

const Jokes = () => {
  const { data, status } = useJoke();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error...</p>;
  }

  return (
    <div className="flex justify-center">
      <Joke data={data.joke} key={data.id} />
    </div>
  );
};

export default Jokes;
