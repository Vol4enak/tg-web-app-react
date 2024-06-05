const getIsLoggedIn = (state) => state.auth.IsLoggedIn;

const getUserEmail = (state) => state.auth.user.email;
// const getUserPassword = (state) => state.auth.user.password;
const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  // getUserPassword,
};
export default authSelectors;
