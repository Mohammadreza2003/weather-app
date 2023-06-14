export const increase = () => {
  return {
    type: "INCREASE",
  };
};

export const changeTheme = (theme) => ({
    type: 'CHANGE_THEME',
    payload: theme,
});

// function changeTheme1(theme) {
//     return {
//         type: 'CHANGE_THEME',
//         payload: theme,
//     }
// }
