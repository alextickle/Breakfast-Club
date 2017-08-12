export const updateCurrentMessage = text => {
  return {
    type: "UPDATE-CURRENT-MESSAGE",
    text: text
  };
};

export const clearCurrentMessage = () => {
  return {
    type: "CLEAR-CURRENT-MESSAGE"
  };
};
