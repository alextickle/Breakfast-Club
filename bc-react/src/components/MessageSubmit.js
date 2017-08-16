import React from 'react';
import { graphql } from 'react-apollo';

const MessageSubmit = props => {
	console.log(props);
	const handleSubmit = e => {
		e.persist();
		// mutate({
		// 	variables: {
		// 		content: e.target.value,
		// 		author: state.firstName,
		// 		user_id: state.user_id
		// 	},
		// 	update: (store, { data: { addMessage } }) => {
		// 		// Read data from cache for this query.
		// 		const data = store.readQuery({ query: messagesQuery });
		// 		// Add message mutation to end.
		// 		data.messages.push(addMessage);
		// 		// Write data back to cache.
		// 		store.writeQuery({ query: messagesQuery, data });
		// 	}
		// }).then(res => {
		// 	e.target.value = '';
		// });
	};

	return (
		<form>
			<div>
				<input className="submit-chat-button" type="submit" value="Send" />
			</div>
		</form>
	);
};

export default MessageSubmit;
