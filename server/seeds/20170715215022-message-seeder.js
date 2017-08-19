"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .bulkInsert("Messages", [
        {
          author: "Rachel R.",
          content: "Welcome to Breakfast Club!",
          user_id: 6,
          createdAt: "2017-07-24 07:52:29-07",
          updatedAt: "2017-07-24 07:52:29-07"
        },
        {
          author: "Nick B.",
          content: "Raquel, where's breakfast at?",
          user_id: 7,
          createdAt: "2017-07-25 08:52:29-07",
          updatedAt: "2017-07-25 08:52:29-07"
        },
        {
          author: "Antonio N.",
          content: "Don't worry about it",
          user_id: 8,
          createdAt: "2017-07-25 09:52:29-07",
          updatedAt: "2017-07-25 09:52:29-07"
        },
        {
          author: "BrazilGabe",
          content: "So...........",
          user_id: 9,
          createdAt: "2017-07-26 07:52:29-07",
          updatedAt: "2017-07-26 07:52:29-07"
        }
      ])
      .then(function() {
        return queryInterface.sequelize.query(
          'ALTER SEQUENCE "Places_id_seq" RESTART 10'
        );
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Messages", null, {}).then(function() {
      return queryInterface.sequelize.query(
        'ALTER SEQUENCE "Places_id_seq" RESTART 1'
      );
    });
  }
};
