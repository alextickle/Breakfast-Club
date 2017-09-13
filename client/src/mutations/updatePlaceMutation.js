import { gql } from "react-apollo";

const updatePlaceMutation = gql`
  mutation updatePlace(
    $id: String!
    $name: String!
    $yelp_rating: String!
    $price: String!
    $address_street: String!
    $phone: String!
    $active: Boolean!
  ) {
    updatePlace(
      name: $name
      yelp_rating: $yelp_rating
      price: $price
      address_street: $address_street
      phone: $phone
      active: $active
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

export default updatePlaceMutation;
