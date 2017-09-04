import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Input from '../components/Input';

const UserLogin = props => {
	return (
		<div className="login-page">
			<div className="wrapper">
				<div className="header-wrapper">
					<Header />
				</div>
				<div className="entry-header">Log In</div>
				<form
					className="form"
					onSubmit={e => {
						e.preventDefault();
						props.login().then(resp => props.setUserEmail(resp.data.login));
					}}
				>
					<Input
						placeholder="email address"
						name="email"
						value={props.email}
						onChange={props.handleChange}
					/>
					<Input
						placeholder="password"
						type="password"
						name="password"
						value={props.password}
						onChange={props.handleChange}
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
				<div className="validate" />
				<img
					className="fruit-border"
					src="../Images/fruit-border.jpg"
					alt="fruit"
				/>
			</div>
		</div>
	);
};

export default UserLogin;
