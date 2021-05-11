import React from "react";
import FilteredSection from "./FilteredSection";
import Pagination from "./Pagination";

const CharactersSection = ({ characterList, setCharacterURL }) => {
  const { data, status } = characterList;

  return (
    <div>
      <h2>Rick And Morty</h2>

      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
          <FilteredSection data={data.results} />
          <Pagination setState={setCharacterURL} data={data} />
        </>
      )}
    </div>
  );
};

export default CharactersSection;
