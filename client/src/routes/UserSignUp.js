//UserSignUp passes props to Input component

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import signUpStore from '../stores/SignUpStore';
import Header from '../components/Header';
import { updateRegistration, submitRegistration } from '../actions/UserActions';

const UserSignUp = props => {
  const validate = () => {
    let errors = {}
    validatePresence('firstName')
    this.validatePresence('lastName')
    this.validatePresence('neighborhood')
    this.validatePasswordLength('password')
    this.validatePresence('password')
    this.validatePresence('verifyPassword')
    this.validatePassword('verifyPassword')
    this.validateEmail('email')
    this.validatePresence('email')
  }

  validatePassword(fieldName, errors){
    if(props.fields[fieldName] !== props.fields.password){
      addError(fieldName, 'try again', errors)
    }
  }

  validatePresence(fieldName, errors){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'required field')
    }
  }

  validatePasswordLength(fieldName){
    const minimum = /^(?=.{6,})/
    if(!minimum.test(this.fields[fieldName])){
      this.addError(fieldName, 'min 6 characters')
    }
  }

  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'invalid email address')
    }
  }

  addError(fieldName, message, errors){
    errors[fieldName] = message
  }

  updateField(attribute, value){
    this.fields[attribute] = value
    this.emit('change')
  }

  clearFields(){
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      neighborhood: '',
      password:'',
      verifyPassword: ''
    }
    this.emit('change')
  }

	return (
		<div className="signup-page">
			<div className="wrapper">
				<div className="header-wrapper">
					<Header />
				</div>
				<div className="entry-header">Sign Up</div>
				{this.state.message}
				<form className="form" onSubmit={props.fetchSignUp(props.fields)}>
					<Input
						name="firstName"
						placeholder="first name"
						value={props.fields.firstName}
						onChange={props.handleChange}
					  errors: {props.errors && props.errors.firstName}
					/>
					<Input
						placeholder="last name"
						name="lastName"
						value={props.fields.lastName}
						onChange={props.handleChange}
						errors: {props.errors && props.errors.lastName}
					/>
					<Input
						placeholder="neighborhood"
						name="neighborhood"
						value={props.fields.neighborhood}
						onChange={props.handleChange}
						errors={props.errors && props.errors.neighborhood}
					/>
					<Input
						placeholder="email address"
						name="email"
						value={props.fields.email}
						onChange={props.handleChange}
						errors={props.errors && props.errors.email}
					/>
					<Input
						placeholder="password"
						type="password"
						name="password"
						value={props.fields.password}
						onChange={props.handleChange}
						errors={props.errors && props.errors.password}
					/>
					<Input
						placeholder="reenter password"
						type="password"
						name="verifyPassword"
						value={props.fields.reenterPassword}
						onChange={props.handleChange}
						errors={props.errors && props.errors.reenterPassword}
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
