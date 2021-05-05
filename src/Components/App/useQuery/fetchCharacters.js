const fetchCharacters = async (key, id, pageURL) => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    return res.json();
  };

  export default fetchCharacters;


// const fetchSpecificUser = async ({ queryKey }) => {
//   const [, id] = queryKey;
//   const response = await fetch(`${id}`);
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// };