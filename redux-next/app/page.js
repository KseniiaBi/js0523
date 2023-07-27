'use client'

import { selectAuthState, setAuthState } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";


export default function Home() {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  return (
    <div className="app" >
      <div>{authState ? "Logged in" : "Not Logged In"}</div>
      <button
        onClick={() =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? "Logout" : "LogIn"}
      </button>
    </div>
  )
}
