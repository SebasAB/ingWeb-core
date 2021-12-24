export default (challenges = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_CHALLENGES":
      return action.payload;
      break;

    case "CREATE_CHALLENGE":
      return [...challenges, action.payload];
      break;

    default:
      return challenges;
  }
};
