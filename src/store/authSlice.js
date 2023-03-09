import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: true },
  reducers: {
    logIn: (state) => {
      state.isLogin = true;
    },
  },
});

export default authSlice.reducer;
export const { logIn } = authSlice.actions;
