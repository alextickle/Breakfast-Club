import { Route, Redirect, Switch } from 'react-router-dom';
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
// import UserLogin from '../routes/UserLogin';
// import Photos from '../routes/Photos';
import PageNotFound from '../routes/PageNotFound';

import MessageBoardToggleContainer from '../containers/MessageBoardToggleContainer';

const TestMain = props => {
	console.log(props);
	return (
		<div>
			<Switch>
				<Route exact path="/" render={() => <SplashPage />} />
				<Route exact path="/404" component={PageNotFound} />
			</Switch>
		</div>
	);
};

export default TestMain;
