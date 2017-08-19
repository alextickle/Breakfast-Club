"use strict";
module.exports = function(sequelize, DataTypes) {
  const GuestList = sequelize.define("GuestList", {
    vote: DataTypes.STRING
  });

  GuestList.associate = models => {
    GuestList.belongsTo(models.Bevent, {
      foreignKey: "event_id",
      as: "event"
    });
    GuestList.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user"
    });
  };
  return GuestList;
};
