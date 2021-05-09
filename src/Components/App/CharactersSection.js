import React, { useState } from "react";
import CharacterCard from "./Cards/CharacterCard";
import FilteredSection from "./FilteredSection";

const CharactersSection = ({ characterList }) => {
  const { data, status } = characterList;

  return (
    <div>
      <h2>Rick And Morty</h2>

      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
     
          <FilteredSection data={characterList.data.results} />
          {/* <div className="card_section">
            {data.results.map((dataPoint, dataIndex) => (
              <CharacterCard
                dataPoint={dataPoint}
                dataIndex={dataIndex}
                key={`${dataIndex}${Math.random()}`}
              />
            ))}
          </div> */}
        </>
      )}
    </div>
  );
};

export default CharactersSection;
