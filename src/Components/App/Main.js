import React, { useState } from "react";
import { useQuery } from "react-query";
import CharactersSection from "./CharactersSection";
import NavBar from "./NavBar";
import EpisodesRicky from "./Episodes";
import LocationsRicky from "./Locations";
import fetchCharacters from "./useQuery/fetchCharacters";
import fetchLocations from "./useQuery/fetchLocations";
import fetchEpisodes from "./useQuery/fetchEpisodes";

const MainApp = () => {
  const [navBar, setNavBar] = useState("C");
  const characterList = useQuery(["characterList"], fetchCharacters);
  const locationList = useQuery(["locations", "id", "pageURL"], fetchLocations);
  const episodeList = useQuery(["episodes", "id", "pageURL"], fetchEpisodes);

  return (
    <div className="App">
      <NavBar setNavBar={setNavBar} navBar={navBar} className="navBar" />

      {navBar === "C" && (
        <CharactersSection
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
            {navBar === "E" && (
        <EpisodesRicky
          characterList={characterList}
          locationList={locationList}
          episodeList={episodeList}
        />
      )}
    </div>
  );
};

export default MainApp;
