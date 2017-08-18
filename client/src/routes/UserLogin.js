import React from 'react';
import { Link } from 'react-router-dom';
import handleLoginChange from '../actions';
import Header from '../components/Header';
import Input from '../components/Input';

const UserLogin = () =>
	<div className="login-page">
		<div className="wrapper">
			<div className="header-wrapper">
				<Header />
			</div>
			<div className="entry-header">Log In</div>
			<form className="form" onSubmit={handleLoginSubmit}>
				<Input
					placeholder="email address"
					name="email"
					value={props.login.fields.email}
					onChange={handleLoginChange.bind(this)}
					errors={props.login.errors.email}
				/>
				<Input
					placeholder="password"
					type="password"
					name="password"
					value={props.login.fields.password}
					onChange={handleLoginChange.bind(this)}
					errors={props.login.errors.password}
				/>
				<div className="let-me-in">
					<input
						className="entry-button wobble"
						type="submit"
						value="Let Me In!!"
					/>
				</div>
				<Link className="take-me-back" to="/">
					<button className="entry-button wobble">Take Me Back!!</button>
				</Link>
			</form>
			<div className="validate">
				{props.login.errors.email || props.login.errors.password}
			</div>
			<img
				className="fruit-border"
				src="../Images/fruit-border.jpg"
				alt="fruit"
			/>
		</div>
	</div>;

export default UserLogin;
