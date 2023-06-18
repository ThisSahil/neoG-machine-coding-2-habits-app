export const habitReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_HABITS":
      return { ...state, habits: action.payload };

    default:
      return state;
  }
};
