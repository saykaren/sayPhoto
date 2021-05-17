import React, { useState } from "react";
import MultipleEpisodeFetch from "./MultipleEpisodeFetch";

const MultipleEpisodes = ({ indexUser, buttonName, buttonNoShow, category, resultComponent }) => {
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
                <MultipleEpisodeFetch string={indexUser.join().toString()} category={category}/>
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

export default MultipleEpisodes;
