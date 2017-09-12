import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import '../style/App.css';

import AdminPageContainer from '../containers/AdminPageContainer';
import CurrentEventContainer from '../containers/CurrentEventContainer';
import PlacesContainer from '../containers/PlacesContainer';
import UserProfileContainer from '../containers/UserProfileContainer';
import UserSignUpContainer from '../containers/UserSignUpContainer';
import SplashPage from '../routes/SplashPage';
import UserLoginContainer from '../containers/UserLoginContainer';
import HomeContainer from '../containers/HomeContainer';
import Photos from '../routes/Photos';
import PageNotFound from '../routes/PageNotFound';

import MessageBoardToggleContainer from '../containers/MessageBoardToggleContainer';

const Main = props =>
	<div>
		{props.userEmail && <MessageBoardToggleContainer />}
		<main>
			<Switch>
				<Route
					exact
					path="/"
					render={() => (props.userEmail ? <HomeContainer /> : <SplashPage />)}
				/>
				<Route
					exact
					path="/home"
					render={() =>
						props.userEmail ? <HomeContainer /> : <Redirect to="/" />}
				/>
				<Route
					exact
					path="/photos"
					render={() => (props.userEmail ? <Photos /> : <Redirect to="/" />)}
				/>
				<Route
					exact
					path="/places"
					render={() =>
						props.userEmail ? <PlacesContainer /> : <Redirect to="/" />}
				/>
				<Route
					exact
					path="/profile"
					render={() =>
						props.userEmail ? <UserProfileContainer /> : <Redirect to="/" />}
				/>
				<Route
					exact
					path="/login"
					render={() =>
						props.userEmail ? <Redirect to="/home" /> : <UserLoginContainer />}
				/>
				<Route
					exact
					path="/signup"
					render={() =>
						props.userEmail ? <Redirect to="/home" /> : <UserSignUpContainer />}
				/>
				<Route
					exact
					path="/current-event"
					render={() =>
						props.userEmail ? <CurrentEventContainer /> : <Redirect to="/" />}
				/>
				<Route
					exact
					path="/admin"
					render={() =>
						props.isAdmin && props.userEmail
							? <AdminPageContainer />
							: <Redirect to="/404" />}
				/>
				<Route exact path="/404" component={PageNotFound} />
			</Switch>
		</main>
	</div>;

export default Main;
