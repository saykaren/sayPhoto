import React, { useState } from "react";
import openSpecific from "./../Modal";
import expand from "./../../Assets/expand.png";

const CharacterCard = ({ dataPoint, dataIndex }) => {
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <div
      key={dataIndex}
      className="card"
      onClick={() => setButtonActive(!buttonActive)}
    >

      <h3>Name: {dataPoint.name}</h3>
      <span>{buttonActive ? (
        openSpecific(
          `https://rickandmortyapi.com/api/character/${dataPoint.id}`,
          setButtonActive,
          buttonActive
        )
      ) : (
        <img src={expand} onClick={() => setButtonActive(!buttonActive)} className="smallIcon" alt="expand"/>
      
      )}</span>
    </div>
  );
};

export default CharacterCard;
