import React, { useState } from "react";
import infoIcon from "./../Assets/Info_white.png";
import minimizeIcon from "./../Assets/minimize_white.png";

const ModalCharacter = ({ dataDetails }) => {
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <>
      <section
        onClick={() => setButtonActive(!buttonActive)}
        className="card_Details"
      >
        <h3>Name: {dataDetails.name}</h3>
        <p>Gender: {dataDetails.gender}</p>
        <p>Species: {dataDetails.species}</p>
      </section>
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
              <h3>Name: {dataDetails.name} </h3>
              <img src={dataDetails.image} alt={dataDetails.name} />
              <p>Origin: {dataDetails.origin.name}</p>{" "}
              <p>Dead Or Alive: {dataDetails.status}</p>
              {dataDetails.gender && <p>Gender: {dataDetails.gender}</p>}
              {dataDetails.type && <p>Type: {dataDetails.type}</p>}
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
    </>
  );
};

export default ModalCharacter;
