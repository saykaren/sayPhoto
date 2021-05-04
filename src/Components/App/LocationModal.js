import React, { useState } from "react";
import LocationCharacter from "./LocationCharacter";
import infoIcon from "./../Assets/Info_white.png";

const LocationsCard = (data) => {
  const [active, setActive] = useState(false);

  return (
    <div onClick={() => setActive(!active)}>
      {active ? (
        <span> {data.residents.length} Residents </span>
      ) : (
        <span>
          <div> {data.residents.length} Residents</div>

          <div>
            Click for details
            <img src={infoIcon} alt="icon" className="smallIcon" />
          </div>
        </span>
      )}
      {active &&
        data.residents.length <= 10 &&
        data.residents.map((charURL, indexChar) => (
          <div key={indexChar}>
            <LocationCharacter indexUser={charURL} />
          </div>
        ))}

      {active && data.residents.length > 10 && (
        <div>
          <LocationCharacter indexUser={data.residents[0]} />
          <div className="details">
            **Due to volume only one resident shown**
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationsCard;
