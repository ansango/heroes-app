import { createContext, useContext, useEffect, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
import types from "./AuthTypes";

const AuthContext = createContext();

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, {}, init);
  const login = ({ payload }) => dispatch({ type: types.login, payload });
  const logout = ({ payload }) => dispatch({ type: types.logout, payload });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
