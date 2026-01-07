import { CookiesKeys, CookieStorage } from "../../../utils/cookie";
import { reduxLogin } from "../../../services/auth";
import {
  setIsLoggedIn,
  setToken,
  setUser,
} from "../../reducer/auth/loginSlice";
import { showErrorToast } from "../../../helper/ToastHelper";

export const loginAction = (input) => async (dispatch) => {
  return reduxLogin(input)
    .then((result) => {
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsLoggedIn(true));
      dispatch(setUser(result.data.data));
      return true;
    })
    .catch((err) => {
      if (err.response) {
        if (err.response.status >= 400 && err.response.status <= 500) {
          showErrorToast(err.response.data.message);
        } else {
          console.error("unexpected Error", err);
        }
      }
    });
};
