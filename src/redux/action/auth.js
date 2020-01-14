import { auth, googleProvider, database } from "../../firebase";

export const googleAuth = () => {
  return dispatch => {
    auth.signInWithPopup(googleProvider);
  };
};

export const FetchUserAuthData = () => {
  return async dispatch => {
    await auth.onAuthStateChanged(data => {
      dispatch({ type: "FETCH_AUTHDATA", payload: data });
    });
  };
};
