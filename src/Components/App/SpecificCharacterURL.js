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

const SpecificCharacterURL = ({
  indexUser,
  setModal,
  modal,
  specificPageURL,
}) => {
  const { isLoading, isError, data, error, status } = useQuery(
    [`user`, indexUser, specificPageURL],
    fetchSpecificUser
  );

  return (
    <>
      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
          {data && (
            <div key={`{data.name}{Math.random()}`} className="modal">
              <button onClick={() => setModal(!modal)}>X</button>
              <h3>Name: {data.name}</h3>
              <img src={data.image} alt={data.name} />
              <p>Origin: {data.origin.name}</p> <p>Status: {data.status}</p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SpecificCharacterURL;
