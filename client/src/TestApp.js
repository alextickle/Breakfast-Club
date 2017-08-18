import React from 'react';
import {
	ApolloClient,
	ApolloProvider,
	createNetworkInterface
} from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import TestMainContainer from './containers/TestMainContainer';
import initStore from './state/store';

let store = initStore();

const networkInterface = createNetworkInterface({
	uri: 'http://localhost:4000/graphql'
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
