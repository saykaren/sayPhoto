const fetchCharacters = async (key, id, pageURL) => {
    // console.log(id);
    // console.log(pageURL);
    const res = await fetch("https://rickandmortyapi.com/api/character");
    return res.json();
  };

  export default fetchCharacters;