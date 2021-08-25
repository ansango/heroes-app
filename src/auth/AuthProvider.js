import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
import types from "./AuthTypes";

const AuthContext = createContext();

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, {}, init);
  const login = ({ payload }) => dispatch({ type: types.login, payload });
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
