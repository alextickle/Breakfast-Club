'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Messages', [
			{
				id: '5484ddd0574c',
				content: 'Welcome to Breakfast Club!',
				user_id: '-Ktxh-yOQWQXpAFRn_6k',
				createdAt: '2017-07-24 07:52:29-07',
				updatedAt: '2017-07-24 07:52:29-07'
			}
		]);
	},

	down: function(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('Messages', null, {});
	}
};
