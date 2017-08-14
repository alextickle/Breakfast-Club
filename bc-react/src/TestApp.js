import React from 'react';
import { createStore } from 'redux';
import {
	ApolloClient,
	ApolloProvider,
	createNetworkInterface
} from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import TestMainContainer from './containers/TestMainContainer';

let store = createStore(reducers);

const networkInterface = createNetworkInterface({
	uri: 'http://localhost:3000/graphql'
});

const client = new ApolloClient({
	networkInterface: networkInterface
});

const TestApp = () => {
	return (
		<BrowserRouter>
			<ApolloProvider store={store} client={client}>
				<TestMainContainer />
			</ApolloProvider>
		</BrowserRouter>
	);
};

export default TestApp;