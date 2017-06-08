import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React, { Component } from 'react';
import Img from 'react-image'
import '../style/Sidebar.css';

class SideBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isClosed: false
      // true will make it collapse into a hamburger icon
    }
  }
//set staet for sidebar

handleBurgerClick(e){
  if(this.state.isClosed){
    this.setState({
      isClosed: false
    })
  } else {
    this.setState({
      isClosed: true
    })
  }
}
//if isClosed(false) on click will open if in original state isClosed(true)

triggerClass(){
  if(this.state.isClosed){
    return "hamburger is-closed"
  } else {
    return "hamburger is-open"
  }
}
//if isclosed(true) css style "hamburger is-closed" will be used and if isClosed(false) css style "hamburger is-opened".

overlayStyle() {
  if(this.state.isClosed) {
    return {display: 'none'}
  } else {
    return {display: 'none'}
    // if block it will block use of the back page.. if none back page is usable
  }
}
//if isclosed(true) css style display will be set to "none" if isClosed(false) css style will display "block".

wrapperClass(){
  if(this.state.isClosed){
    return ""
  } else {
    return "toggled"
  }
}
//if isclosed(true) css style will be set to default isClosed ("") if isClosed(false) css style will be set to taggled ("toggled").

  render() {

    return (
      <div id="wrapper" className={this.wrapperClass()}>
        <div className="overlay" style={this.overlayStyle()}></div>
        <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
          <ul className="nav sidebar-nav">
              <a className="side-bar-text-top" href="/home">Home</a>
            <li>
              <a href="#" className="login"> <img className='side-bar-image profile top-image' src='../Images/user (1).png'/></a>
            </li>
            <li>
              <a href="#"><img className="side-bar-image" src='../Images/calendar (2).png'/></a>
            </li>
            <li>
              <a href="#"><img className="side-bar-image" src='../Images/logout.png'/></a>
            </li>
            <div className="side-bar-bottom">
              <div>
                <a className="side-bar-text-bottom" href="#">Team</a>
              </div>
              <div>
                <a className="side-bar-text-bottom" href="#">Contact</a>
              </div>
            </div>
          </ul>
        </nav>

        <div id="page-content-wrapper">
          <button type="button" className={this.triggerClass()} data-toggle="offcanvas" onClick={this.handleBurgerClick.bind(this)}>
            <span className="hamb-top"></span>
            <span className="hamb-middle"></span>
            <span className="hamb-bottom"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default SideBar