export const fetchStreaming = async (param) => {
  const [searchKey, programType, sortType, sortTitle ] = param.queryKey;

  const res = await fetch(`http://localhost:8080/entries?programType=${programType}&_limit=21&releaseYear_gte=2010&title_like=${searchKey}&_sort=${sortTitle}&_order=${sortType}`);

  return res.json();
};
