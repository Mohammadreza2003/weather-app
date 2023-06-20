const initialState = {
  theme: "light",
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default settingsReducer;
