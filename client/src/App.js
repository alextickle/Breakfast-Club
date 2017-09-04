import React from 'react';
import {
	ApolloClient,
	ApolloProvider,
	createNetworkInterface
} from 'react-apollo';
import MainContainer from './containers/MainContainer';
import initStore from './state/store';
import PathConfig from './config/PathConfig';

let store = initStore();

const networkInterface = createNetworkInterface({
	uri: `${PathConfig.serverDomain()}graphql`
});

const client = new ApolloClient({
	networkInterface: networkInterface
});

const App = () =>
	<ApolloProvider store={store} client={client}>
		<MainContainer />
	</ApolloProvider>;

export default App;
