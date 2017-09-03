import { Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import '../style/App.css';

// logged in routes
// import AdminPageContainer from '../routes/AdminPage';
// import CurrentEventContainer from '../containers/CurrentEventContainer';
// import HomeContainer from '../containers/HomeContainer';
// import PastEventContainer from '../containers/PastEventContainer';
// import PlacesContainer from '../containers/PlacesContainer';
// import UserProfileContainer from '../containers/UserProfileContainer';

// unprotected routes
// import UserSignUp from '../routes/UserSignUp';
// import TestEvent from '../routes/TestEvent';
import SplashPage from '../routes/SplashPage';
import UserLoginContainer from '../containers/UserLoginContainer';
// import Photos from '../routes/Photos';
import PageNotFound from '../routes/PageNotFound';

import MessageBoardToggleContainer from '../containers/MessageBoardToggleContainer';

const TestMain = props =>
	<div>
		{props.user && <MessageBoardToggleContainer />}
		<Switch>
			<Route exact path="/" render={() => <SplashPage />} />
			<Route exact path="/home" render={() => <h1>Home</h1>} />
			<Route
				exact
				path="/login"
				render={() =>
					props.user ? <Redirect to="/home" /> : <UserLoginContainer />}
			/>
			<Route exact path="/404" component={PageNotFound} />
			<Route exact path="/test" component={MessageBoardToggleContainer} />
		</Switch>
	</div>;

export default TestMain;
