const searchHandler = (data, term) => {
  if (term === 0) return data;
  return data.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
};

const filterHandler = (data, filter) => {
  switch (filter) {
    case "popular":
      return data.filter((c) => c.like);
    case "mostViewers":
      return data.filter((c) => c.viewers > 800);
    default:
      return data;
  }
};

export { searchHandler, filterHandler };

