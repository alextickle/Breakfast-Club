import React from 'react';
import ReactDOM from 'react-dom';
// import App from "./App";
import TestApp from './TestApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<TestApp />
	</BrowserRouter>,
	document.getElementById('root')
);
