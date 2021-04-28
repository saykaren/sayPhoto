import React, { useState } from "react";
import { useQuery, QueryClient } from "react-query";
import fetchLocations from './useQuery/fetchLocations';
import fetchCharacters from './useQuery/fetchCharacters';
import CharacterCard from './Cards/CharacterCard';

const LocationsRicky = () => {
  const { data, status } = useQuery("locations", fetchLocations);
  const { dataCharacter, statusCharacter } = useQuery("characterList", fetchCharacters);

  console.log({data});
  return (
    <div>
      <h2>Locations</h2>

      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
          {data.results.map((dataPoint, dataIndex) => (
            <div key={dataIndex} className="card">
              <h3>Location Name: {dataPoint.name}</h3>
              <p> Type: {dataPoint.type}</p>
              <p>Residents: {dataPoint.residents.map((resident, indexR)=>(
                //   <CharacterCard dataPoint={resident} dataIndex={indexR} />
                <div>{resident}</div>
              ))
              }</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default LocationsRicky;
