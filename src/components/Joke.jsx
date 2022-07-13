import React from "react";
import { useQueryClient } from "react-query";

const Joke = ({ data }) => {
  const client = useQueryClient();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex p-4 w-96 justify-center items-center py-4 border-2 border-gray-500">
        {data}
      </div>
      <button
        className="text-white bg-green-700 p-2 rounded"
        onClick={() => client.invalidateQueries("joke")}
      >
        {" "}
        Generat new Joke{" "}
      </button>
    </div>
  );
};

export default Joke;
