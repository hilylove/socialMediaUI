import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "637d2616bad1ef1aacf9738e",
    username: "jane",
    email: "jane@gmail.com",
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    isAdmin: false,
    followers: [],
    followings: [],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
