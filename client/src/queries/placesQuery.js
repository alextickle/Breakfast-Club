import { gql } from "react-apollo";

const placesQuery = gql`
  query placesQuery {
    places {
      name
      address_street
      address_city
      address_state
      address_zip
      phone
      yelp_rating
      image_url
      categories
      review_count
      price
      url
      active
    }
  }
`;

export default placesQuery;
