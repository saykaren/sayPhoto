import React, { useState } from "react";

import infoIcon from "./../../Assets/Info_white.png";
import minimizeIcon from "./../../Assets/minimize_white.png";

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
          <section className="modalBackground">
            <div className="modal">
              <img
                src={minimizeIcon}
                alt="minimize"
                onClick={() => setButtonActive(!buttonActive)}
                className="smallIcon floatRight"
              />
              <h3>Name: {dataPoint.name}</h3>
              <img src={dataPoint.image} alt={dataPoint.name} />
              <p>Origin: {dataPoint.origin.name}</p>{" "}
              <p>Status: {dataPoint.status}</p>
              <p>Gender: {dataPoint.gender}</p>
            </div>
          </section>
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
