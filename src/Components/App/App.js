import React, { useState } from "react";
import "../Styling/App.css";
import Navbar from "./NavBar";
import Planets from "./Planets";
import People from "./People";
import {   useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,} from 'react-query'
import {ReactQueryDevtools} from 'react-query-devtools';

const queryClient = new QueryClient()

function App() {
  const [page, setPage] = useState("planets");

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage}/>
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
      
       </>
  );
}



export default App;
