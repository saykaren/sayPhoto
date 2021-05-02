import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import LocationCharacter from "./LocationCharacter";

const LocationsCard = (data) => {
  const [active, setActive] = useState(false);
  const check = data.residents;
  console.log({ check });
  return (
    <div onClick={() => setActive(!active)}>

      {active ? <span>  Residents: </span> : <span>  Residents: Click for details</span>}
      {active &&
        data.residents.map((charURL, indexChar) => (
          <div key={indexChar}>
            <LocationCharacter indexUser={charURL} />
          </div>
        ))}
    </div>
  );
};

export default LocationsCard;
