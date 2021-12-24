export default (shelfs = [], action) => {
  switch (action.type) {
    case "GET_SHELF":
      return action.payload;
      break;

    case "CREATE_SHELF":
      return action.payload;
      break;

    case "ADD_BOOK":
      return action.payload;

    default:
      return shelfs;
  }
};
