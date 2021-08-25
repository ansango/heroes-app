import types from "./AuthTypes";

export const AuthReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.login:
      return { ...payload, logged: true };
    case types.logout:
      return { logged: false };
    default:
      return state;
  }
};
