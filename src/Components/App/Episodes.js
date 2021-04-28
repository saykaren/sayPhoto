import React, { useState } from "react";
import { useQuery, QueryClient } from "react-query";

const fetchEpisodes = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  return res.json();
};

const EpisodesRicky = () => {
  const { data, status } = useQuery("episodes", fetchEpisodes);

  console.log(data);
  return (
    <div>
      <h2>Episodes</h2>

      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
          {data.results.map((dataPoint, dataIndex) => (
            <div key={dataIndex} className="card">
              <h3>Episode Name: {dataPoint.name}</h3>
              <p>Episode Number: {dataPoint.episode}</p>{" "}
              <p>Characters: eventually pull here</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default EpisodesRicky;
