import React, { useState } from "react";
import { useQuery } from "react-query";
import CharactersSection from "./CharactersSection";
import NavBar from "./NavBar";
import EpisodesRicky from "./Episodes";
import LocationsRicky from "./Locations";
import fetchURL from "./useQuery/fetchURL";
import Footer from "./Footer";
import fetchFilter from "./useQuery/fetchFilter";

const MainApp = () => {
  const [characterURL, setCharacterURL] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const [uniqueSpecificCharacterName, setUniqueSpecificCharacterName] =
    useState("");
  const [episodeURL, setEpisodeURL] = useState(
    "https://rickandmortyapi.com/api/episode"
  );
  const [locationURL, setLocationURL] = useState(
    "https://rickandmortyapi.com/api/location"
  );
  const [navBar, setNavBar] = useState("C");
  const characterList = useQuery(
    ["characterList", `${characterURL}`],
    fetchURL
  );
  const locationList = useQuery(["locations", `${locationURL}`], fetchURL);
  const episodeList = useQuery(["episodes", `${episodeURL}`], fetchURL);
  const characterSpecificList = useQuery(
    ["characterUniqueList", `${uniqueSpecificCharacterName}`],
    fetchFilter
  );

  return (
    <div className="App">
      <section className="main_app">
        <NavBar setNavBar={setNavBar} navBar={navBar} className="navBar" />
        {navBar === "C" && (
          <CharactersSection
            characterList={
              uniqueSpecificCharacterName === ""
                ? characterList
                : characterSpecificList
            }
            setCharacterURL={setCharacterURL}
            setUniqueSpecificCharacterName={setUniqueSpecificCharacterName}
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
