'use strict';
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('GuestLists', {
			id: {
				allowNull: false,
				autoIncrement: false,
				primaryKey: true,
				type: Sequelize.STRING
			},
			user_id: {
				type: Sequelize.STRING,
				allowNull: true
			},
			event_id: {
				type: Sequelize.STRING,
				allowNull: false
			},
			vote: {
				type: Sequelize.INTEGER
			},
			attended: {
				type: Sequelize.BOOLEAN
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('GuestLists');
	}
};
