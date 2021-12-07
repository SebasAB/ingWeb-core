export default (books = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
      break;

    case "CREATE":
      return [ ...books, action.payload ]
      break;

    case "UPDATE":
      return books.map((book) => book._id === action.payload._id ? action.payload : book )
      break;

    case "DELETE":
      return books.filter((book) => book._id !== action.payload) 
      break;

    default:
      return books;
  }
};
