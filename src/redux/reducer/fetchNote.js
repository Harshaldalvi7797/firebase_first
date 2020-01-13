const FetchNote = (INITIAL_STATE = {}, action) => {
  switch (action.type) {
    case "FETCH_NOTE":
      return action.payload;
    default:
      return INITIAL_STATE;
  }
};

export default FetchNote;
