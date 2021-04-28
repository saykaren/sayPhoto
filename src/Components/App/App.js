import React, { useState } from "react";
import "../Styling/App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import RickAndMorty from "./RickAndMorty";
import NavBar from './NavBar';
import EpisodesRicky from './Episodes';
import LocationsRicky from './Locations';

const queryClient = new QueryClient();

const App = () => {
  const [navBar, setNavBar] = useState('C');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <NavBar setNavBar={setNavBar} navBar={navBar}/>
        {navBar === 'C' && <RickAndMorty />}
        {navBar === 'E' && <EpisodesRicky />}
        {navBar === 'L' && <LocationsRicky />}
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default App;
