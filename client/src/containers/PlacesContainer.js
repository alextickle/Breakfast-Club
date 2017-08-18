import { graphql } from "react-apollo";
import placesQuery from "../queries/placesQuery";
import Places from "../routes/Places";

const PlacesContainer = graphql(placesQuery)(Places);

export default PlacesContainer;
