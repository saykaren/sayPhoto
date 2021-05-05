const fetchCharacters = async (key, id, pageURL) => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    return res.json();
  };

  export default fetchCharacters;