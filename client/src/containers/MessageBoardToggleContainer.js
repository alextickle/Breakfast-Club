import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import messageBoardOperations from '../state/ducks/messageBoard/operations';
import MessageBoardToggle from '../components/MessageBoardToggle';
import messagesQuery from '../queries/messagesQuery';

const mapStateToProps = state => ({
	showMessageBoard: state.showMessageBoard,
	currentMessage: state.currentMessage,
	user: state.user
});

const mapDispatchToProps = {
	toggleMessageBoard: messageBoardOperations.toggleMessageBoard,
	updateCurrentMessage: messageBoardOperations.updateCurrentMessage
};

const MessageBoardToggleContainerWithData = connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageBoardToggle);

const MessageBoardToggleContainer = graphql(messagesQuery)(
	MessageBoardToggleContainerWithData
);

export default MessageBoardToggleContainer;
