import * as api from "../api";

export const getShelf = () => async (dispatch) => {
  try {
    const { data } = await api.fetchShelfs();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createShelf = (shelfInfo) => async (dispatch) => {
  try {
    const { data } = await api.createShelf(shelfInfo);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
