import React, { useState } from "react";
import LocationCharacter from "./LocationCharacter";
import infoIcon from "./../Assets/Info_white.png";

const LocationsCard = (data) => {
  const [active, setActive] = useState(false);

  return (
    <div onClick={() => setActive(!active)}>
      {active ? (
        <span> Residents: {data.residents.length} Residents </span>
      ) : (
        <span>
          {" "}
          Residents: {data.residents.length}{" "}
          {data.residents.length < 10 && (
            <>
              {" "}
              Click for details{" "}
              <img src={infoIcon} alt="icon" className="smallIcon" />
            </>
          )}
        </span>
      )}
      {active &&
        data.residents.length < 10 &&
        data.residents.map((charURL, indexChar) => (
          <div key={indexChar}>
            <LocationCharacter indexUser={charURL} />
          </div>
        ))}
    </div>
  );
};

export default LocationsCard;
