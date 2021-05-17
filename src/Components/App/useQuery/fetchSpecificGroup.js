const fetchSpecificGroup = async ({ queryKey }) => {
  const [, id, category] = queryKey;

  const response = await fetch(
    `https://rickandmortyapi.com/api/${category}${id}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default fetchSpecificGroup;
