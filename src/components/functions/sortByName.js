const sortAscByName = (countryList) => {
  return [...countryList].sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};

const sortDescByName = (countryList) => {
  return [...countryList].sort((a, b) => {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });
};

export { sortAscByName, sortDescByName };
