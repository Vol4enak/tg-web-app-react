

const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUsername = (state) => state.auth.user.name;
const getUserErrorLogin = (state) => state.auth.error;
const getUserErrorReg = (state) => state.auth.error;
const getUserToken = (state) => state.auth.token;
const authSelectors = {
  getUserToken,
  getIsLoggedIn,
  getUsername,
  getUserErrorLogin,
  getUserErrorReg,
};
export default authSelectors;
