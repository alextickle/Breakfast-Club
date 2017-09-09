'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('Bevents', {
			id: {
				allowNull: false,
				autoIncrement: false,
				primaryKey: true,
				type: Sequelize.STRING
			},
			date: {
				type: Sequelize.DATE,
				allowNull: false
			},
			place_1_id: {
				type: Sequelize.STRING,
				references: {
					model: 'Places',
					key: 'id',
					as: 'place_1_id'
				},
				allowNull: false
			},
			place_2_id: {
				type: Sequelize.STRING,
				references: {
					model: 'Places',
					key: 'id',
					as: 'place_2_id'
				},
				allowNull: false
			},
			vote_status: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			winner: {
				type: Sequelize.INTEGER
			},
			speaker: {
				type: Sequelize.STRING,
				allowNull: true,
				defaultValue: undefined
			},
			active: {
				type: Sequelize.STRING,
				allowNull: true,
				defaultValue: undefined
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
		return queryInterface.dropTable('Bevents');
	}
};
