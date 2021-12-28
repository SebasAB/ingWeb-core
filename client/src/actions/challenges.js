import * as api from "../api";

export const getChallenges = (email) => async (dispatch) => {
  try {
    const { data } = await api.fetchChallenges(email);
    dispatch({ type: "GET_ALL_CHALLENGES", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createChallenge = (email) => async (dispatch) => {
  try {
    const { data } = await api.createChallenge(email);
    dispatch({ type: "CREATE_CHALLENGE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addNewChallenge = (email, challenge) => async (dispatch) => {
  try {
    const { data } = await api.updateChallenges(email, challenge);
    dispatch({ type: "ADD_NEW_CHALLENGE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
