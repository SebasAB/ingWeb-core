export default (challenges = [], action) => {
  switch (action.type) {
    case "GET_ALL_CHALLENGES":
      return action.payload;
      break;

    case "CREATE_CHALLENGE":
      return [...challenges, action.payload];
      break;

    default:
      return challenges;
  }
};
