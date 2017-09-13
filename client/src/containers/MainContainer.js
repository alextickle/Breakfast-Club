import Main from "../components/Main";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import userOperations from "../state/ducks/user/operations";

const mapStateToProps = state => ({
  userEmail: state.user.email,
  isAdmin: state.user.isAdmin
});

const mapDispatchToProps = {
  setUser: userOperations.setUser
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
