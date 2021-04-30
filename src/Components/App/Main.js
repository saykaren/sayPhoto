import React, { useState } from "react";
import "../Styling/App.css";
import { useQuery } from "react-query";
import RickAndMorty from "./RickAndMorty";
import NavBar from "./NavBar";
import EpisodesRicky from "./Episodes";
import LocationsRicky from "./Locations";
import SpecificCharacterURL from "./SpecificCharacterURL";
import fetchCharacters from "./useQuery/fetchCharacters";
import fetchLocations from "./useQuery/fetchLocations";
import fetchEpisodes from "./useQuery/fetchEpisodes";

const MainApp = () => {
  const [navBar, setNavBar] = useState("C");
  const characterList = useQuery("characterList", fetchCharacters);
  const locationList = useQuery("locations", fetchLocations);
  const episodeList = useQuery("episodes", fetchEpisodes);
  const [modal, setModal] = useState(true);

  return (
    <div className="App">
   
      <NavBar setNavBar={setNavBar} navBar={navBar} />
      {modal ? 
        <SpecificCharacterURL
          indexUser={"https://rickandmortyapi.com/api/character/3"} className={modal ? "modal" : "modal-close"} setModal={setModal} modal={modal}
        /> : <button onClick={()=>setModal(!modal)}>?</button>
      }
      {navBar === "C" && (
        <RickAndMorty
          characterList={characterList}
          locationList={locationList}
          episodeList={episodeList}
        />
      )}
      {navBar === "E" && (
        <EpisodesRicky
          characterList={characterList}
          locationList={locationList}
          episodeList={episodeList}
        />
      )}
      {navBar === "L" && (
        <LocationsRicky
          characterList={characterList}
          locationList={locationList}
          episodeList={episodeList}
        />
      )}

      {/* <ReactQueryDevtools initialIsOpen={false} />  */}
    </div>
  );
};

export default MainApp;
