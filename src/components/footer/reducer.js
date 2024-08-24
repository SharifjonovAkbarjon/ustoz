export const initialState = {
  son: 0,
  str: "Whats ur name",
  data: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, son: state.son + action.payload };
    case "DEC":
      return { ...state, son: state.son - 1 };
    default:
      return state;
  }
};
