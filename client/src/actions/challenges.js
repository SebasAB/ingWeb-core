import * as api from "../api";

export const getChallenges = (email) => async (dispatch) => {
  try {
    const { data } = await api.fetchChallenges(email);
    dispatch({ type: "GET_ALL_CHALLENGES", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createChallenge = (challenge) => async (dispatch) => {
  try {
    const { data } = await api.createChallenge(challenge);
    dispatch({ type: "CREATE_CHALLENGE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
