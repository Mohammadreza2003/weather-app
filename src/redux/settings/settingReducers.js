const initialState = {
  counter: 0,
  theme: "light",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, counter: state.counter + 1};
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
