const fetchLocations = async ({ queryKey }) => {
  const [, id] = queryKey;
  const res = await fetch(`${id}`);
  return res.json();
};

export default fetchLocations;
