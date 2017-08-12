import { graphql } from "react-apollo";
import messagesQuery from "../queries/messagesQuery";
import MessageBoardToggle from "../components/MessageBoardToggle";

const mapStateToProps = state => {
  return {
    currentMessage: state.currentMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateCurrentMessage: text => {
      dispatch(updateCurrentMessage(text));
    }
  };
};

const MessageBoardToggleContainer = graphql(messagesQuery)(MessageBoardToggle);
MessageBoardToggleContainer = connect(mapStateToProps)(
  MessageBoardToggleContainer
);

export default MessageBoardToggleContainer;
