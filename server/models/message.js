"use strict";
module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define("Message", {
    content: DataTypes.STRING,
    author: DataTypes.STRING
  });

  Message.associate = models => {
    Message.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user"
    });
  };
  return Message;
};
