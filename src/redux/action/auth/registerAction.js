import { CookiesKeys, CookieStorage } from "../../../utils/cookie";
import { setToken } from "../../reducer/auth/loginSlice";
import { reduxRegister } from "../../../services/auth";
import { showErrorToast } from "../../../helper/ToastHelper";

export const registerAction = (input) => async (dispatch) => {
  return reduxRegister(input)
    .then((result) => {
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
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
