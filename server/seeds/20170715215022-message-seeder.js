'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Messages', [
			{
				author: 'Rachel R.',
				content: 'Welcome to Breakfast Club!',
				user_id: 'ad9f3e526715',
				createdAt: '2017-07-24 07:52:29-07',
				updatedAt: '2017-07-24 07:52:29-07'
			}
		]);
	},

	down: function(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('Messages', null, {});
	}
};
