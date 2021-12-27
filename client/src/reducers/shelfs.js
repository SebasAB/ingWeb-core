export default (shelfs = [], action) => {
  switch (action.type) {
    case "GET_SHELF":
      return action.payload;
      break;

    case "CREATE_SHELF":
      return shelfs;
      break;

    case "ADD_BOOK":
      return shelfs;

    case "DELETE_FROM_SHELF":
      return action.payload;

    default:
      return shelfs;
  }
};
