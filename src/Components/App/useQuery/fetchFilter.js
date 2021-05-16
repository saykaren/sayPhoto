const fetchFilter = async ({ queryKey }) => {
    const [, id] = queryKey;
  
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
  
  export default fetchFilter;