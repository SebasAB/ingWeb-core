export default (shelfs = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
      break;

    case "CREATE":
      return action.payload;
      break;

    default:
      return shelfs;
  }
};
