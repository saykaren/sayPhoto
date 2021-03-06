import React from "react";
import "../Styling/App.scss";
import { QueryClient, QueryClientProvider } from "react-query";

import MainApp from "./Main";
import {ReactQueryDevtools} from 'react-query/devtools';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainApp />
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
    </QueryClientProvider>
  );
};

export default App;
