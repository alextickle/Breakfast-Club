import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import reducers from "./reducers";
import MainContainer from "./containers/Main";

let store = createStore(reducers);

const networkInterface = createNetworkInterface({
  uri: "http://localhost:3000/graphql"
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider store={store} client={client}>
        <Router>
          <MainContainer />
        </Router>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
