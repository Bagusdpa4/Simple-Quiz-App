import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./auth/loginSlice";
import registerSlice from "./auth/registerSlice";

export default combineReducers({
  authLogin: loginSlice,
  authRegister: registerSlice,
});
