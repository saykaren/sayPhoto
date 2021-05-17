import React, { useState } from "react";
import Pagination from "./Pagination";
import ModalCharacter from "./ModalCharacter";
import MultipleEpisodes from "./MultipleEpisodes";
import MultipleEpisodeFetch from "./MultipleEpisodeFetch";
import expand from "./../Assets/expand.png";

const CharactersSection = ({ characterList, setCharacterURL }) => {
  const { data, status } = characterList;
  const [showData, setShowData] = useState("");
  const [aliveFilter, setAliveFilter] = useState("");
  const [filtersShown, setFiltersShown] = useState(false);

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
              placeholder="Search Character Name"
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
            <img src={expand} alt="expand" onClick={()=>setFiltersShown(!filtersShown)} className="smallIcon"/>
          </section>
          
          {filtersShown && (
          <section className="filter_section">
            <span>Filter Dead, Alive or Unknown</span>{" "}
            <select 
              name="alive"
              value={aliveFilter}
              onChange={(e) => setAliveFilter(e.target.value)}
              placeholder=""
            >
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
            <button
              onClick={() =>
                setCharacterURL(
                  `https://rickandmortyapi.com/api/character/?status=${aliveFilter}`
                )
              }
            >
              Submit
            </button>
            <button onClick={() => clearUp()}>Clear</button>
          </section>
          )}
          <Pagination setState={setCharacterURL} data={data} />

          <div className="card_section">
            {data &&
              data.results.map((dataPointFiltered, dataIndex) => (
                <div key={dataIndex} className="card alignTogether">
                  <ModalCharacter dataDetails={dataPointFiltered} />
                  <MultipleEpisodes
                  buttonName={"Episodes"}
                  buttonNoShow={"No Episodes"}
                  indexUser={dataPointFiltered.episode.map(
                    (urlEpisode, index) => `${urlEpisode.slice(40)}`
                            
                  )}
                  category={"episode/"}
                  resultComponent={MultipleEpisodeFetch}
                />
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
