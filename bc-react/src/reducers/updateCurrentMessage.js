const updateCurrentMessage = (currentMessage = "", action) => {
  switch (action.type) {
    case "UPDATE-CURRENT-MESSAGE":
      return action.text;
    default:
      return currentMessage;
  }
};

export default updateCurrentMessage;
