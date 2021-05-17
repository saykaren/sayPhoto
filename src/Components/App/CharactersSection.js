import React, { useState } from "react";
import Pagination from "./Pagination";
import ModalCharacter from "./ModalCharacter";

const CharactersSection = ({ characterList, setCharacterURL }) => {
  const { data, status } = characterList;
  const [showData, setShowData] = useState("");

  const clearUp = () => {
    setCharacterURL("https://rickandmortyapi.com/api/character");
    setShowData("");
  };
  return (
    <div>
      <h2>Rick And Morty</h2>
      {status === "error" && (
        <div>
          Error Fetching Data <button onClick={() => clearUp()}>Clear</button>
        </div>
      )}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
          <section className="filter_section">
            <input
              type="text"
              id="name_input"
              value={showData}
              onChange={(e) => setShowData(e.target.value)}
              placeholder="Search"
            />
            <button
              onClick={() =>
                setCharacterURL(
                  `https://rickandmortyapi.com/api/character/?name=${showData}`
                )
              }
            >
              Submit
            </button>
            <button onClick={() => clearUp()}>Clear</button>
          </section>
          <Pagination setState={setCharacterURL} data={data} />

          <div className="card_section">
            {data &&
              data.results.map((dataPointFiltered, dataIndex) => (
                <div key={dataIndex} className="card alignTogether">
                  <ModalCharacter dataDetails={dataPointFiltered} />
                </div>
              ))}
          </div>
          <Pagination setState={setCharacterURL} data={data} />
        </>
      )}
    </div>
  );
};

export default CharactersSection;
