import types from "./AuthTypes";

export const AuthReducer = (state = {}, { type, payload }) => {
  const { login, logout } = types;
  switch (type) {
    case login:
      return { ...payload, logged: true };
    case logout:
      return { logged: false };
    default:
      return state;
  }
};
