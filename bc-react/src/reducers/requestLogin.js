const requestLogin = (state, action) => {
  switch (action.type) {
    case "REQUEST-LOGIN":
      return Object.assign({}, state, {
        login: {
          isFetching: true,
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

export default requestLogin;