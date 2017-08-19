import { graphql } from "react-apollo";
import userQuery from "../queries/userQuery";
import UserProfile from "../routes/UserProfile";

const UserProfileContainer = graphql(userQuery, {
  options: props => ({
    variables: { id: props.user.id }
  })
})(UserProfile);

export default UserProfileContainer;
