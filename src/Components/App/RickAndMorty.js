import React, { useState } from "react";
import { useQuery, QueryClient } from "react-query";
import fetchCharacters from './useQuery/fetchCharacters';
import CharacterCard from './Cards/CharacterCard';

//https://rickandmortyapi.com/api

const RickAndMorty = () => {
  const { data, status } = useQuery("characterList", fetchCharacters);

  console.log(data);
  return (
    <div>
      <h2>Rick And Morty</h2>

      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
          {data.results.map((dataPoint, dataIndex) => (
            <CharacterCard dataPoint={dataPoint} dataIndex={dataIndex} />

          ))}
          {data.results.map((dataPoint, dataIndex) => (
            <div key={dataIndex} className="card">
              <h3>Name: {dataPoint.name}</h3>
              <img src={dataPoint.image} />
              <p>Origin: {dataPoint.origin.name}</p>{" "}
              <p>Status: {dataPoint.status}</p>
            </div>
          ))}

        </>
      )}
      {/* {status === 'success' && dataSet === "https://rickandmortyapi.com/api/episode" && (
                  <>
               {data.results.map((dataPoint, dataIndex)=>
                <div key={dataIndex} className="card">
                    <h3>Name: {dataPoint.name}</h3>
                   
                     <p>Episode: {dataPoint.episode}</p> <p>Status: {dataPoint.status}</p> 
                     </div>
              
               )}
        
               </>
              
           )}  */}
    </div>
  );
};

export default RickAndMorty;
