import { graphql } from "react-apollo";
import currentEventQuery from "../queries/currentEventQuery";
import Home from "../routes/Home";

const HomeContainer = graphql(currentEventQuery)(Home);

export default HomeContainer;
