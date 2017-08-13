import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { updateCurrentMessage } from '../actions';
import messagesQuery from '../queries/messagesQuery';
import MessageBoardToggle from '../components/MessageBoardToggle';

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

let MessageBoardToggleWithData = graphql(messagesQuery)(MessageBoardToggle);
const MessageBoardToggleContainer = connect(mapStateToProps)(
	MessageBoardToggleWithData
);

export default MessageBoardToggleContainer;
