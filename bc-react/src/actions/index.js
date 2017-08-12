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

export const handleLoginSubmit = () => {
  return {
    type: "HANDLE-LOGIN-SUBMIT"
  };
};
