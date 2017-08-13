import React from 'react';
import { graphql } from 'react-apollo';
import addMessageMutation from '../../queries/addMessageMutation';
import { updateCurrentMessage } from '../actions';

const MessageSubmit = ({ mutate, state }) => {
	const handleSubmit = e => {
		e.persist();
		mutate({
			variables: {
				content: e.target.value,
				author: state.firstName,
				user_id: state.user_id
			},
			update: (store, { data: { addMessage } }) => {
				// Read data from cache for this query.
				const data = store.readQuery({ query: messagesQuery });
				// Add message mutation to end.
				data.messages.push(addMessage);
				// Write data back to cache.
				store.writeQuery({ query: messagesQuery, data });
			}
		}).then(res => {
			e.target.value = '';
		});
	};

	return (
		<form onSubmit={this.handleSubmit.bind(this)}>
			<div>
				<input
					className="submit-field"
					size="20"
					type="text"
					placeholder="type a message"
					name="message"
					autoComplete="off"
					value={state.currentMessage}
					onChange={updateCurrentMessage}
				/>
			</div>
			<div>
				<input className="submit-chat-button" type="submit" value="Send" />
			</div>
		</form>
	);
};
