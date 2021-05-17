import React, { useState } from "react";
import { useQuery } from "react-query";
import CharactersSection from "./CharactersSection";
import NavBar from "./NavBar";
import EpisodesRicky from "./Episodes";
import LocationsRicky from "./Locations";
import fetchURL from "./useQuery/fetchURL";
import Footer from "./Footer";

const MainApp = () => {
  const characterBasicURL = "https://rickandmortyapi.com/api/character";
  const [characterURL, setCharacterURL] = useState(characterBasicURL);
  const [episodeURL, setEpisodeURL] = useState(
    "https://rickandmortyapi.com/api/episode"
  );
  const [locationURL, setLocationURL] = useState(
    "https://rickandmortyapi.com/api/location"
  );
  const [navBar, setNavBar] = useState("C");
  const locationList = useQuery(["locations", `${locationURL}`], fetchURL);
  const episodeList = useQuery(["episodes", `${episodeURL}`], fetchURL);
  const characterList = useQuery(
    ["characterList", `${characterURL}`],
    fetchURL
  );

  return (
    <div className="App">
      <section className="main_app">
        <NavBar setNavBar={setNavBar} navBar={navBar} className="navBar" />
        {navBar === "C" && (
          <CharactersSection
            characterList={characterList}
            setCharacterURL={setCharacterURL}
          />
        )}
        {navBar === "L" && (
          <LocationsRicky
            locationList={locationList}
            setLocationURL={setLocationURL}
          />
        )}
        {navBar === "E" && (
          <EpisodesRicky
            episodeList={episodeList}
            setEpisodeURL={setEpisodeURL}
          />
        )}
      </section>
      <Footer />
    </div>
  );
};

export default MainApp;
