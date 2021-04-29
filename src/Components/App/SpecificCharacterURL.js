import React from "react";
import { useQuery } from "react-query";

const fetchSpecificUser = async ({ queryKey }) => {
  const [, id] = queryKey;
  const response = await fetch(`${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const SpecificCharacterURL = ({ indexUser }) => {
  const { isLoading, isError, data, error } = useQuery(
    [`user`, indexUser],
    fetchSpecificUser
  );

  return (
    <>
      {data && (
        <div key={data.name} className="card">
          <h3>Name: {data.name}</h3>
          <img src={data.image} alt={data.name} />
          <p>Origin: {data.origin.name}</p> <p>Status: {data.status}</p>
        </div>
      )}
    </>
  );
};

export default SpecificCharacterURL;
