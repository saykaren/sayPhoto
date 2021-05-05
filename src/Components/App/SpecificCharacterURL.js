import React from "react";
import { useQuery } from "react-query";
import minimizeIcon from "./../Assets/minimize_white.png";

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
  const { data, status } = useQuery(
    [`user`, indexUser, specificPageURL],
    fetchSpecificUser
  );

  return (
    <>
      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <section className="modalBackground" >
          {data && (
            <div key={`{data.name}{Math.random()}`} className="modal">
              <img src={minimizeIcon} alt="minimize" onClick={() => setModal(!modal)} className="smallIcon floatRight"/>
 
              <h3>Name: {data.name}</h3>
              <img src={data.image} alt={data.name} />
              <p>Origin: {data.origin.name}</p> <p>Status: {data.status}</p>
              <p>Gender: {data.gender}</p> 
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default SpecificCharacterURL;
