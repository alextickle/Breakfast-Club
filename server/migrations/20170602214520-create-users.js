'use strict';
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('Users', {
			id: {
				type: Sequelize.STRING,
				allowNull: false,
				autoIncrement: false,
				primaryKey: true
			},
			firstName: {
				type: Sequelize.STRING
			},
			lastName: {
				type: Sequelize.STRING
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			neighborhood: {
				type: Sequelize.STRING
			},
			encryptedPassword: {
				type: Sequelize.STRING
			},
			authToken: {
				type: Sequelize.STRING
			},
			authTokenExpiration: {
				type: Sequelize.STRING
			},
			salt: {
				type: Sequelize.STRING
			},
			voted: {
				type: Sequelize.BOOLEAN
			},
			admin: {
				type: Sequelize.BOOLEAN
			},
			rsvp: {
				type: Sequelize.BOOLEAN
			},
			active: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false
			}
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('Users');
	}
};
