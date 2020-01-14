export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_AUTHDATA":
      return action.payload;
    default:
      return state;
  }
};
