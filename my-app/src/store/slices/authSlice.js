import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  // isAdmin: false,
  // user : {
  //   name : 'anonimoususer'
  // }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
