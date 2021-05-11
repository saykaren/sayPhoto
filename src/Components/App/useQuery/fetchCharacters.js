const fetchCharacters = async ({queryKey}) => {
    const [ , id] = queryKey;
    const res = await fetch(`${id}`);
    return res.json();
  };

  export default fetchCharacters;