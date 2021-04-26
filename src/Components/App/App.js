import React, { useState } from "react";
import "../Styling/App.css";
import Navbar from "./NavBar";
import Planets from "./Planets";
import People from "./People";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  const [page, setPage] = useState("planets");

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage}/>
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
     
    </div>
    </QueryClientProvider>
  );
}

export default App;
