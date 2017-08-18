import React from 'react';
import {
	ApolloClient,
	ApolloProvider,
	createNetworkInterface
} from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import initStore from './state/store';
import MainContainer from './containers/Main';

let store = initStore();

const networkInterface = createNetworkInterface({
	uri: 'http://localhost:3000/graphql'
});

const client = new ApolloClient({
	networkInterface: networkInterface
});

const App = () => {
	return (
		<BrowserRouter>
			<ApolloProvider store={store} client={client}>
				<MainContainer />
			</ApolloProvider>
		</BrowserRouter>
	);
};

export default App;
