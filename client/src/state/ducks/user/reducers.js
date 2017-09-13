import types from "./types";

const initialState = {
  email: "",
  isAdmin: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        email: action.email,
        isAdmin: action.isAdmin
      };
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default user;
