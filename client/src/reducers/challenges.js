export default (challenges = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
      break;

    case "CREATE":
      return [...challenges, action.payload];
      break;

    default:
      return challenges;
  }
};
