import { graphql } from "react-apollo";
import adminQuery from "../queries/adminQuery";
import AdminPage from "../routes/AdminPage";

const AdminPageContainer = graphql(adminQuery)(AdminPage);

export default AdminPageContainer;
