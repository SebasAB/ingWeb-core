import * as api from "../api/index";

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: "AUTH", data });
    history("/");
  } catch (error) {}
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: "AUTH", data });
    history("/");
  } catch (error) {}
};
