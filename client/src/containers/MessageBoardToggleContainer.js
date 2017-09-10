import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import messageBoardOperations from '../state/ducks/messageBoard/operations';
import MessageBoardToggle from '../components/MessageBoardToggle';
import messagesQuery from '../queries/messagesQuery';
import userQuery from '../queries/userQuery';
import addMessageMutation from '../mutations/addMessageMutation';

const mapStateToProps = state => ({
	showMessageBoard: state.messageBoard,
	userEmail: state.userEmail
});

const mapDispatchToProps = {
	toggleMessageBoard: messageBoardOperations.toggleMessageBoard
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	graphql(messagesQuery, {
		name: 'messagesQuery'
	}),
	graphql(userQuery, {
		name: 'userQuery',
		options: props => ({
			variables: { email: props.userEmail }
		})
	}),
	graphql(addMessageMutation, {
		props: ({ ownProps, mutate }) => ({
			addMessage: (content, userId) =>
				mutate({
					variables: {
						content: content,
						user_id: userId
					},
					update: (store, { data: { addMessage } }) => {
						const data = store.readQuery({ query: messagesQuery });
						data.messages.push(addMessage);
						store.writeQuery({ query: messagesQuery, data });
					}
				})
		})
	})
)(MessageBoardToggle);
