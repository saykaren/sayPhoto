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
import openSpecific from "./Modal";

const MainApp = () => {

  const id = 77;
  const pageURL = "helloPage77";
  const [navBar, setNavBar] = useState("C");
  const characterList = useQuery(["characterList", id, pageURL], fetchCharacters, {staleTime: 10000, cacheTime: 100000});
  const locationList = useQuery(["locations", "id", "pageURL"], fetchLocations, {staleTime: 10000, cacheTime: 100000});
  const episodeList = useQuery(["episodes", "id", "pageURL"], fetchEpisodes, {staleTime: 10000, cacheTime: 100000},);
  const [modal, setModal] = useState(false);

  // const openSpecific = (pullUrl)=>{
  //   console.log(pullUrl);
  //   return(    <SpecificCharacterURL
  //     indexUser={pullUrl} className={modal ? "modal" : "modal-close"} setModal={setModal} modal={modal}
  //   /> )
  // }

  return (
    <div className="App">
   
      <NavBar setNavBar={setNavBar} navBar={navBar} />
      {/* {modal ? openSpecific("https://rickandmortyapi.com/api/character/3", setModal, modal) : <button onClick={()=>setModal(!modal)}>?</button>} */}

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
