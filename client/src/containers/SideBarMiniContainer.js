import SideBarMini from "../components/SideBarMini";
import { connect } from "react-redux";
import userOperations from "../state/ducks/user/operations";

const mapStateToProps = state => ({
  userEmail: state.user.email,
  isAdmin: state.user.isAdmin
});

const mapDispatchToProps = {
  logout: userOperations.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarMini);
