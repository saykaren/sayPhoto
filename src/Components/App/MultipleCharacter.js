import React, { useState } from "react";
import MultipleCharacterFetch from "./MultipleCharacterFetch";

const MultipleCharacter = ({ indexUser, buttonName, buttonNoShow }) => {
  const [whoAmI, setWhoAmI] = useState(false);

  return (
    <>
      {whoAmI ? (
        <>
          {indexUser.join().toString() === "" ? (
            <h3>{buttonNoShow}</h3>
          ) : (
            <>
              <button onClick={() => setWhoAmI(!whoAmI)}>{buttonName}</button>
              {indexUser.join().toString() !== undefined && (
                <MultipleCharacterFetch string={indexUser.join().toString()} />
              )}
            </>
          )}
        </>
      ) : (
        <button onClick={() => setWhoAmI(!whoAmI)}>List of {buttonName}</button>
      )}
    </>
  );
};

export default MultipleCharacter;
