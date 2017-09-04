import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Header from '../components/Header';

const UserSignUp = props => {
	const handleSubmit = e => {
		e.preventDefault();
		props.clearErrors();
		validate();
		if (Object.keys(props.errors).length === 0) {
			props.signUp().then(resp => props.setUserEmail(resp.data.signUp));
		}
	};
	const validate = () => {
		validatePresence('firstName');
		validatePresence('lastName');
		validatePresence('neighborhood');
		validatePasswordLength('password');
		validatePresence('password');
		validatePresence('verifyPassword');
		validatePassword('verifyPassword');
		validateEmail('email');
		validatePresence('email');
	};

	const validatePassword = fieldName => {
		if (props[fieldName] !== props.password) {
			props.addError(fieldName, 'try again');
		}
	};

	const validatePresence = fieldName => {
		if (props[fieldName] === '') {
			props.addError(fieldName, 'required field');
		}
	};

	const validatePasswordLength = fieldName => {
		const minimum = /^(?=.{6,})/;
		if (!minimum.test(props[fieldName])) {
			props.addError(fieldName, 'min 6 characters');
		}
	};

	const validateEmail = fieldName => {
		const filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!filter.test(props[fieldName])) {
			props.addError(fieldName, 'invalid email address');
		}
	};

	return (
		<div className="signup-page">
			<div className="wrapper">
				<div className="header-wrapper">
					<Header />
				</div>
				<div className="entry-header">Sign Up</div>
				<form className="form" onSubmit={handleSubmit}>
					<Input
						name="firstName"
						placeholder="first name"
						value={props.firstName}
						onChange={props.handleChange}
						errors={props.errors && props.errors.firstName}
					/>
					<Input
						placeholder="last name"
						name="lastName"
						value={props.lastName}
						onChange={props.handleChange}
						errors={props.errors && props.errors.lastName}
					/>
					<Input
						placeholder="neighborhood"
						name="neighborhood"
						value={props.neighborhood}
						onChange={props.handleChange}
						errors={props.errors && props.errors.neighborhood}
					/>
					<Input
						placeholder="email address"
						name="email"
						value={props.email}
						onChange={props.handleChange}
						errors={props.errors && props.errors.email}
					/>
					<Input
						placeholder="password"
						type="password"
						name="password"
						value={props.password}
						onChange={props.handleChange}
						errors={props.errors && props.errors.password}
					/>
					<Input
						placeholder="reenter password"
						type="password"
						name="verifyPassword"
						value={props.verifyPassword}
						onChange={props.handleChange}
						errors={props.errors && props.errors.verifyPassword}
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
			</div>
			<img
				className="fruit-border"
				src="../Images/fruit-border.jpg"
				alt="fruit"
			/>
		</div>
	);
};
export default UserSignUp;
