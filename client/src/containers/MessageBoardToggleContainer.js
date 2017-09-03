import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
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

export default compose(
	graphql(messagesQuery),
	graphql(addMessageMutation),
	connect(mapStateToProps, mapDispatchToProps)
)(MessageBoardToggle);
