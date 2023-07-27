'use client'
import { createSlice } from "@reduxjs/toolkit";


// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: false
  },
  reducers: {
    // Action to set the authentication status
    setAuthState: (state, action) =>{
      state.auth = action.payload;
    },
  }
});

export const  {setAuthState}  = authSlice.actions;
export const selectAuthState = (state) => state.auth.auth;
export default authSlice.reducer;