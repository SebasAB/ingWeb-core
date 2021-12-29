export default (challenges = [], action) => {
  switch (action.type) {
    case "GET_ALL_CHALLENGES":
      return action.payload;
      break;

    case "CREATE_CHALLENGE":
      return action.payload;
      break;

    // case "ADD_NEW_CHALLENGE":
    //   return action.payload;

    default:
      return challenges;
  }
};
