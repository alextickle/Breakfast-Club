const uuid = require('uuid/v1');
const crypto = require('crypto');
const pushid = require('pushid');
('use strict');

module.exports = function(sequelize, DataTypes) {
	const User = sequelize.define(
		'User',
		{
			id: {
				allowNull: false,
				autoIncrement: false,
				defaultValue: () => pushid(),
				primaryKey: true,
				type: DataTypes.STRING
			},
			firstName: {
				type: DataTypes.STRING,
				allowNull: false
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: true
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true // <-- Code level validations
				}
			},
			neighborhood: {
				type: DataTypes.STRING,
				allowNull: false
			},
			voted: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			rsvp: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			admin: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			active: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			encryptedPassword: {
				type: DataTypes.STRING,
				allowNull: false
			},
			authToken: {
				type: DataTypes.STRING
			},
			authTokenExpiration: {
				type: DataTypes.DATE
			},
			salt: {
				type: DataTypes.STRING
			}
		},
		{
			setterMethods: {
				password(value) {
					if (value) {
						const salt = uuid();
						this.setDataValue('salt', salt);
						const hash = this.encrypt(value);
						this.setDataValue('encryptedPassword', hash);
					}
				}
			}
		}
	);

	User.associate = models => {
		User.hasMany(models.GuestList, {
			foreignKey: 'user_id',
			as: 'guestLists'
		});
		User.hasMany(models.Message, {
			foreignKey: 'user_id',
			as: 'messages'
		});
	};

	User.prototype.toJSON = function() {
		return {
			id: this.get('id'),
			firstName: this.get('firstName'),
			lastName: this.get('lastName'),
			email: this.get('email'),
			neighborhood: this.get('neighborhood'),
			voted: this.get('voted'),
			rsvp: this.get('rsvp'),
			admin: this.get('admin'),
			active: this.get('active'),
			authToken: this.get('authToken'),
			authTokenExpiration: this.get('authTokenExpiration')
		};
	};

	User.prototype.encrypt = function(value) {
		const salt = this.get('salt');
		return crypto.createHmac('sha512', salt).update(value).digest('hex');
	};

	// Checks to see if passed value matches encrypted password value from record
	User.prototype.verifyPassword = function(unverifiedPassword) {
		//encrypt unverifiedPassword
		const encryptedUnverifiedPassword = this.encrypt(unverifiedPassword);

		//compare encryptedUnverifiedPassword with password
		return encryptedUnverifiedPassword === this.get('encryptedPassword');
	};

	User.prototype.setAuthToken = function() {
		const token = uuid();
		const expiration = new Date();
		expiration.setMonth(expiration.getMonth() + 1);
		this.setDataValue('authToken', token);
		this.setDataValue('authTokenExpiration', expiration);
	};

	User.hook('beforeCreate', (user, options) => {
		user.setAuthToken();
	});

	return User;
};
