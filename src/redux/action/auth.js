import { auth, googleProvider, database } from "../../firebase";

export const googleAuth = () => {
  return dispatch => {
    auth.signInWithPopup(googleProvider);
  };
};
