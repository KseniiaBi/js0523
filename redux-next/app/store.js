'use client'
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

const makeStore = () =>
  configureStore({
    reducer: {
        auth: authSlice.reducer,
    }
  });


export const store = makeStore();