import { graphql, compose } from 'react-apollo';
import React from 'react';
import currentEventQuery from '../queries/currentEventQuery';
import userQuery from '../queries/userQuery';
import Home from '../routes/Home';

export default compose(
	graphql(userQuery, {
		options: props => ({
			variables: { email: props.userEmail }
		})
	}),
	graphql(currentEventQuery)
)(Home);
