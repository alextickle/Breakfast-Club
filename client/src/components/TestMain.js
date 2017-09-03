import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import '../style/App.css';

// logged in routes
// import AdminPageContainer from '../routes/AdminPage';
// import CurrentEventContainer from '../containers/CurrentEventContainer';
// import HomeContainer from '../containers/HomeContainer';
// import PastEventContainer from '../containers/PastEventContainer';
import PlacesContainer from '../containers/PlacesContainer';
// import UserProfileContainer from '../containers/UserProfileContainer';

import UserSignUpContainer from '../routes/UserSignUpContainer';
import SplashPage from '../routes/SplashPage';
import UserLoginContainer from '../containers/UserLoginContainer';
import HomeContainer from '../containers/HomeContainer';
import Photos from '../routes/Photos';
import PageNotFound from '../routes/PageNotFound';

import MessageBoardToggleContainer from '../containers/MessageBoardToggleContainer';

const TestMain = props =>
	<div>
		{props.userEmail && <MessageBoardToggleContainer />}
		<main>
			<Switch>
				<Route exact path="/" component={SplashPage} />
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
					path="/login"
					render={() =>
						props.userEmail ? <Redirect to="/home" /> : <UserLoginContainer />}
				/>
				<Route
					exact
					path="/signup"
					render={() =>
						props.userEmail ? <Redirect to="/home" /> : <UserSignUp />}
				/>
				<Route exact path="/404" component={PageNotFound} />
				<Route exact path="/test" render={() => <h1>Test</h1>} />
			</Switch>
		</main>
	</div>;

export default TestMain;
