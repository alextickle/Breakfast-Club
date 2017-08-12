const clearCurrentMessage = (currentMessage = "", action) => {
  switch (action.type) {
    case "CLEAR-CURRENT-MESSAGE":
      return "";
    default:
      return currentMessage;
  }
};

export default clearCurrentMessage;
