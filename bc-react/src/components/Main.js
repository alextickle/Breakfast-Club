import { Route, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";
import "./style/App.css";

// logged in routes
import AdminPageContainer from "../routes/AdminPage";
import CurrentEventContainer from "../containers/CurrentEventContainer";
import HomeContainer from "../containers/HomeContainer";
import PastEventContainer from "../containers/PastEventContainer";
import PlacesContainer from "../containers/PlacesContainer";
import UserProfileContainer from "../containers/UserProfileContainer";

// unprotected routes
import UserSignUp from "./routes/UserSignUp";
import TestEvent from "./routes/TestEvent";
import SplashPage from "./routes/SplashPage";
import UserLogin from "./routes/UserLogin";
import Photos from "./routes/Photos";
import PageNotFound from "./routes/PageNotFound";

import MessageBoardToggleContainer from "../containers/MessageBoardToggleContainer";

const Main = props =>
  <div>
    {props.user && <MessageBoardToggleContainer />}
    <Switch>
      <Route
        exact
        path="/"
        render={() => (props.user ? <Redirect to="/home" /> : <SplashPage />)}
      />
      <Route
        exact
        path="/signup"
        render={() => (props.user ? <Redirect to="/home" /> : <UserSignUp />)}
      />
      <Route
        exact
        path="/login"
        render={() => (props.user ? <Redirect to="/home" /> : <UserLogin />)}
      />
      <Route
        exact
        path="/places"
        render={() => (props.user ? <PlacesContainer /> : <Redirect to="/" />)}
      />
      <Route
        exact
        path="/home"
        render={() =>
          props.user
            ? <HomeContainer user={props.user} />
            : <Redirect to="/" />}
      />
      <Route
        exact
        path="/profile"
        render={() =>
          props.user
            ? <UserProfileContainer user={props.user} />
            : <Redirect to="/" />}
      />
      <Route path="/past-event/:eventId" component={PastEventContainer} />
      <Route
        exact
        path="/current-event"
        render={() =>
          props.user
            ? <CurrentEventContainer user={props.user} />
            : <Redirect to="/" />}
      />
      <Route
        exact
        path="/photos"
        render={() => (props.user ? <Photos /> : <Redirect to="/" />)}
      />
      <Route
        exact
        path="/admin"
        render={() =>
          isAdmin && props.user
            ? <AdminPageContainer />
            : <Redirect to="/404" />}
      />
      <Route exact path="/test-event" component={TestEvent} />
      <Route exact path="/404" component={PageNotFound} />
      <Redirect to="/404" />
    </Switch>
  </div>;

export default Main;
