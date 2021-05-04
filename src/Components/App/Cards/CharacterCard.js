import React, { useState } from "react";
import openSpecific from "./../Modal";
import infoIcon from "./../../Assets/Info_white.png";

const CharacterCard = ({ dataPoint, dataIndex }) => {
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <div
      key={dataIndex}
      className="card alignTogether"
      onClick={() => setButtonActive(!buttonActive)}
    >
      <h3>Name: {dataPoint.name}</h3>
      <span>
        {buttonActive ? (
          openSpecific(
            `https://rickandmortyapi.com/api/character/${dataPoint.id}`,
            setButtonActive,
            buttonActive
          )
        ) : (
          <img
            src={infoIcon}
            onClick={() => setButtonActive(!buttonActive)}
            className="smallIcon floatRight"
            alt="expand"
          />
        )}
      </span>
    </div>
  );
};

export default CharacterCard;
