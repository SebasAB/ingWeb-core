import * as api from "../api";

export const getShelf = (email) => async (dispatch) => {
  try {
    const { data } = await api.fetchShelfs(email);
    dispatch({ type: "GET_SHELF", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createShelf = (shelfInfo) => async (dispatch) => {
  try {
    const { data } = await api.createShelf(shelfInfo);
    dispatch({ type: "CREATE_SHELF", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateShelf = (email, book) => async (dispatch) => {
  try {
    console.log("updatingShelf");
    const { data } = await api.updateShelf(email, book);
    dispatch({ type: "ADD_BOOK", payload: data });
  } catch (error) {}
};

export const deleteFromShelf = (email, book) => async (dispatch) => {
  try {
    const { data } = await api.deleteFromShelf(email, book);
    dispatch({ type: "DELETE_FROM_SHELF", payload: data });
  } catch (error) {
    console.log(error);
  }
};
