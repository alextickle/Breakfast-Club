import { gql } from "react-apollo";

const addPlaceMutation = gql`
  mutation addPlace(
    $name: String!
    $yelp_rating: Int!
    $price: String!
    $categories: String!
    $address_street: String!
    $phone: String!
  ) {
    addPlace(
      name: $name
      yelp_rating: $yelp_rating
      price: $price
      categories: $categories
      address_street: $address_street
      phone: $phone
    ) {
      id
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

export default addPlaceMutation;
