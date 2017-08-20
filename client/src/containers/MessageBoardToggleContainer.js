import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import messageBoardOperations from '../state/ducks/messageBoard/operations';
import MessageBoardToggle from '../components/MessageBoardToggle';
import messagesQuery from '../queries/messagesQuery';
import addMessageMutation from '../queries/addMessageMutation';

const mapStateToProps = state => ({
	showMessageBoard: state.showMessageBoard,
	user: state.user
});

const mapDispatchToProps = {
	toggleMessageBoard: messageBoardOperations.toggleMessageBoard
};

const MessageBoardToggleContainerWithData = connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageBoardToggle);

const MessageBoardWithMessages = graphql(messagesQuery)(
	MessageBoardToggleContainerWithData
);

const MessageBoardToggleContainer = graphql(addMessageMutation)(
	MessageBoardWithMessages
);

export default MessageBoardToggleContainer;
