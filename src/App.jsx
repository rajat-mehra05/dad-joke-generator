import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Hero from "./components/Hero";
import Jokes from "./components/Jokes";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Hero />
        <Jokes />
      </QueryClientProvider>
    </div>
  );
};

export default App;
