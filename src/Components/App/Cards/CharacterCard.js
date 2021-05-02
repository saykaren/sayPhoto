import React, { useState } from "react";
import openSpecific from "./../Modal";

const CharacterCard = ({ dataPoint, dataIndex }) => {
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <div
      key={dataIndex}
      className="card"
      onClick={() => setButtonActive(!buttonActive)}
    >
      {buttonActive ? (
        openSpecific(
          `https://rickandmortyapi.com/api/character/${dataPoint.id}`,
          setButtonActive,
          buttonActive
        )
      ) : (
        <button onClick={() => setButtonActive(!buttonActive)}>Details</button>
      )}
      <h3>Name: {dataPoint.name}</h3>
      <p>Origin: {dataPoint.origin.name}</p> <p>Status: {dataPoint.status}</p>
    </div>
  );
};

export default CharacterCard;
