"use strict";
module.exports = function(sequelize, DataTypes) {
  const Bevent = sequelize.define("Bevent", {
    date: DataTypes.DATE,
    place_1_id: DataTypes.INTEGER,
    place_2_id: DataTypes.INTEGER,
    vote_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    winner: DataTypes.INTEGER,
    place: DataTypes.VIRTUAL,
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    speaker: DataTypes.STRING
  });

  Bevent.associate = models => {
    Bevent.belongsTo(models.Place, {
      foreignKey: "place_1_id",
      as: "place_1"
    });
    Bevent.belongsTo(models.Place, {
      foreignKey: "place_2_id",
      as: "place_2"
    });
    Bevent.hasMany(models.GuestList, {
      foreignKey: "event_id",
      as: "guestLists"
    });
  };
  return Bevent;
};
