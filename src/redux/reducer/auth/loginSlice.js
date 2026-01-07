import { createSlice } from "@reduxjs/toolkit";
import { CookieStorage, CookiesKeys } from "../../../utils/cookie";

const initialState = {
  token: CookieStorage.get(CookiesKeys.AuthToken) || null,
  isLoggedIn: false,
  user: null,
  userProfile: null,
};

const loginSlice = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { setToken, setIsLoggedIn, setUser, setUserProfile } =
  loginSlice.actions;

export default loginSlice.reducer;
