const pushid = require('pushid');

module.exports = function(sequelize, DataTypes) {
	const Message = sequelize.define('Message', {
		id: {
			allowNull: false,
			autoIncrement: false,
			defaultValue: () => pushid(),
			primaryKey: true,
			type: DataTypes.STRING
		},
		content: DataTypes.STRING,
		author: DataTypes.STRING
	});

	Message.associate = models => {
		Message.belongsTo(models.User, {
			foreignKey: 'user_id',
			as: 'user'
		});
	};
	return Message;
};
