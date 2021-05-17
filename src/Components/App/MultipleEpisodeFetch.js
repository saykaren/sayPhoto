import React from "react";
import { useQuery } from "react-query";
import fetchSpecificGroup from "./useQuery/fetchSpecificGroup";

const MultipleEpisodeFetch = ({ string, category }) => {
  const { data, status } = useQuery(
    [`user`, string, category],
    fetchSpecificGroup
  );

  return (
    <>
      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
          {data.length === undefined && (
            <div key={`${data.name}${Math.random()}`}>
              <h3>{data.name}</h3>
              <p>
                #{data.episode} {data.air_date}{" "}
              </p>
            </div>
          )}
          {data.length > 0 &&
            data.map((eachEpisode, indexChar) => (
              <div key={`${eachEpisode.name}${Math.random()}`}>
                <h3>{eachEpisode.name} </h3>
                <p>
                  #{eachEpisode.episode} {eachEpisode.air_date}{" "}
                </p>
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default MultipleEpisodeFetch;
