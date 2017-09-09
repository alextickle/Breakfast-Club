const pushid = require('pushid');

module.exports = function(sequelize, DataTypes) {
	const GuestList = sequelize.define('GuestList', {
		id: {
			allowNull: false,
			autoIncrement: false,
			defaultValue: () => pushid(),
			primaryKey: true,
			type: DataTypes.STRING
		},
		vote: DataTypes.INTEGER
	});

	GuestList.associate = models => {
		GuestList.belongsTo(models.Bevent, {
			foreignKey: 'event_id',
			as: 'event'
		});
		GuestList.belongsTo(models.User, {
			foreignKey: 'user_id',
			as: 'user'
		});
	};
	return GuestList;
};
