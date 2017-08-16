import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import messageBoardOperations from '../state/ducks/messageBoard/operations';
import MessageBoardToggle from '../components/MessageBoardToggle';
import messagesQuery from '../queries/messagesQuery';

const mapStateToProps = state => {
	return {
		showMessageBoard: state.showMessageBoard,
		currentMessage: state.currentMessage
	};
};

const mapDispatchToProps = dispatch => {
	return {
		toggleMessageBoard: () => {
			dispatch(messageBoardOperations.toggleMessageBoard());
		},
		updateCurrentMessage: text => {
			dispatch(messageBoardOperations.updateCurrentMessage(text));
		}
	};
};

const MessageBoardToggleContainerWithData = connect(mapDispatchToProps)(
	MessageBoardToggle
);

const MessageBoardToggleContainer = graphql(messagesQuery)(
	MessageBoardToggleContainerWithData
);

export default MessageBoardToggleContainer;
