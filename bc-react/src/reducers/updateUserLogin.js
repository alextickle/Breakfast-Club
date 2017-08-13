const updateUserLogin = (state, action) => {
  switch (action.type) {
    case "UPDATE-USER-LOGIN-FIELDS":
      return Object.assign({}, state, {
        login: {
          isFetching: false,
          fields: {
            email: action.fields.email,
            password: action.fields.password
          }
        }
      });
    default:
      return state;
  }
};

export default updateUserLogin;
