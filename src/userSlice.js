import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    name: "",
    username: "",
    email: "",
    password: "",
    loggedIn: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const getUser = (state) => state.user;

export const {
  setName,
  setEmail,
  setPassword,
  setUserName,
  setLoggedIn,
} = slice.actions;

export default slice.reducer;
