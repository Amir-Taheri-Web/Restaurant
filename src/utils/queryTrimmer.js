const queryTrimmer = (query) => {
  Object.keys(query).forEach((k) => query[k] === "" && delete query[k]);

  return query;
};

export default queryTrimmer;
