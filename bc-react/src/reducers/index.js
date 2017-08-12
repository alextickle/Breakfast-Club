import { combineReducers } from "redux";
import updateCurrentMessage from "./updateCurrentMessage";

const reducers = combineReducers({
  updateCurrentMessage,
  clearCurrentMessage
});

export default reducers;
