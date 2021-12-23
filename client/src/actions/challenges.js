import * as api from "../api";

export const getChallenges = () => async (dispatch) => {
  try {
    const { data } = await api.getChallenges();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createChallenge = (challenge) => async (dispatch) => {
  try {
    const { data } = await api.createChallenge(challenge);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
