import React from "react";
import { useQuery } from "react-query";

const fetchSpecificUser = async ({ queryKey }) => {
  const [, id] = queryKey;

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const MultipleCharacterFetch = ({ string }) => {
  const { data, status } = useQuery([`user`, string], fetchSpecificUser);

  return (
    <>
      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
          {data.length === undefined && (
            <div key={`{data.name}{Math.random()}`}>
              <h3>Name: {data.name}</h3>
              <img src={data.image} alt={data.name} />
              <p>Origin: </p> <p>Status: {data.status}</p>
            </div>
          )}
          {data.length > 0 &&
            data.map((eachChar, indexChar) => (
              <div key={`${eachChar.name}${Math.random()}`}>
                <h3>Name: {eachChar.name}</h3>
                <img src={eachChar.image} alt={eachChar.name} />
                <p>Origin: </p> <p>Status: {eachChar.status}</p>
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default MultipleCharacterFetch;
