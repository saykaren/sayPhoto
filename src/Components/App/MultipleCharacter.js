import React, { useState } from "react";
import MultipleCharacterFetch from "./MultipleCharacterFetch";

const MultipleCharacter = ({ indexUser }) => {
  const [whoAmI, setWhoAmI] = useState(false);

  return (
    <>
      {whoAmI ? (
        <>
          {indexUser.join().toString() === "" ? (
            <h3>Uninhabited</h3>
          ) : (
            <>
              <button onClick={() => setWhoAmI(!whoAmI)}>Residents</button>
              {indexUser.join().toString() !== undefined && (
                <MultipleCharacterFetch string={indexUser.join().toString()} />
              )}
            </>
          )}
        </>
      ) : (
        <button onClick={() => setWhoAmI(!whoAmI)}>List of Residents</button>
      )}
    </>
  );
};

export default MultipleCharacter;
