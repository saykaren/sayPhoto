import React, { useState } from "react";
import { useQuery, QueryClient } from "react-query";

const fetchLocations = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/location");
  return res.json();
};

const LocationsRicky = () => {
  const { data, status } = useQuery("locations", fetchLocations);

  console.log(data);
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
              <p>Residents: eventually pull here</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default LocationsRicky;
