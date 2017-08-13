const clearCurrentMessage = (state, action) => {
  switch (action.type) {
    case "CLEAR-CURRENT-MESSAGE":
      return Object.assign({}, state, {
        currentMessage: ""
      });
    default:
      return state;
  }
};

export default clearCurrentMessage;
