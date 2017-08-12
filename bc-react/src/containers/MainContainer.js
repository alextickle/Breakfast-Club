import Main from "../components/Main";
import { connect } from "react-redux";
import { increment } from "../actions";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const Main = connect(mapStateToProps)(Main);

export default MainContainer;
