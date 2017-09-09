const pushid = require('pushid');

module.exports = function(sequelize, DataTypes) {
	const Place = sequelize.define('Place', {
		// would have to run a migration to add this bottom
		// Recommend adding an `id` & `yelp_id` attribute
		// in the process simplifying the db setup
		// ----------------------------------------
		// id: DataTypes.INTEGER,
		// yelp_id: DataTypes.INTEGER,
		// ----------------------------------------
		id: {
			allowNull: false,
			autoIncrement: false,
			defaultValue: () => pushid(),
			primaryKey: true,
			type: DataTypes.STRING
		},
		name: {
			type: DataTypes.STRING,
			unique: true
		},
		address_street: DataTypes.STRING,
		address_city: DataTypes.STRING,
		address_state: DataTypes.STRING,
		address_zip: DataTypes.STRING,
		phone: DataTypes.STRING,
		yelp_rating: DataTypes.INTEGER,
		image_url: DataTypes.STRING,
		categories: DataTypes.STRING,
		review_count: DataTypes.INTEGER,
		price: DataTypes.STRING,
		url: DataTypes.STRING,
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		}
	});

	Place.associate = function(models) {
		Place.hasMany(models.Bevent, {
			foreignKey: 'place_1_id',
			as: 'events_1'
		});
		Place.hasMany(models.Bevent, {
			foreignKey: 'place_2_id',
			as: 'events_2'
		});
	};

	return Place;
};
