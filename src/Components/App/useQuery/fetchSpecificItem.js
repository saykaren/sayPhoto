  async function fetchSpecificItem(urlR) {
      const res = await fetch({urlR});
      return res.json();
  };

  export default fetchSpecificItem;