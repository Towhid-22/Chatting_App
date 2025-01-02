import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("UserInfo")
    ? JSON.parse(localStorage.getItem("UserInfo"))
    : null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoginInfo: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { userLoginInfo } = UserSlice.actions;

export default UserSlice.reducer;
