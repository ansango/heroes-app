import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

const AuthContext = createContext();

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, {}, init);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
