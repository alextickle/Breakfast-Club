import React from 'react';
import {
	ApolloClient,
	ApolloProvider,
	createNetworkInterface
} from 'react-apollo';
import PathConfig from './config/PathConfig';
import { BrowserRouter } from 'react-router-dom';
import initStore from './state/store';
import MainContainer from './containers/Main';

let store = initStore();

const networkInterface = createNetworkInterface({
	uri: `${PathConfig.serverDomain()}/graphql`
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
