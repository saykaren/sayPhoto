import React, { useState } from "react";
import "../Styling/App.css";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
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

  return (
    <div className="App">
      <SpecificCharacterURL
        indexUser={"https://rickandmortyapi.com/api/character/3"}
      />
      <NavBar setNavBar={setNavBar} navBar={navBar} />
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
