const fetchLocations = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/location");
    return res.json();
  };

  export default fetchLocations;