import React from "react";
import "../Styling/App.css";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

import MainApp from "./Main";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainApp />
    </QueryClientProvider>
  );
};

export default App;
