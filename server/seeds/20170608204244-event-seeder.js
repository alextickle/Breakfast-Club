'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bevents', [
      {
        id: '-KtxjbFS26AQXfzQYAUl',
        place_1_id: '2a434166c129',
        place_2_id: '-Ktxj0IOI2NMTxjDg49M',
        date: '2017-06-30 08:00:00-07',
        vote_status: false,
        winner: 1,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: 'Rob Kaufman'
      },
      {
        id: '-KtxjhgV-b6xdeNQzeEF',
        place_1_id: '-Ktxj0IOI2NMTxjDg49M',
        place_2_id: '-KtxjDAagEoj-OBVcgnL',
        date: '2017-07-07 08:00:00-07',
        vote_status: false,
        winner: 1,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: 'Matt Clark'
      },
      {
        id: '2474ddb0572c',
        place_1_id: '-KtxjDAagEoj-OBVcgnL',
        place_2_id: '-KtxjR3j_ADgtY2pn5vx',
        date: '2017-07-14 08:00:00-07',
        vote_status: false,
        winner: 1,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: 'James Hall'
      },
      {
        id: '2474ddb0572d',
        place_1_id: '2a434166c129',
        place_2_id: '-KtxjR3j_ADgtY2pn5vx',
        date: '2017-07-21 08:00:00-07',
        vote_status: false,
        winner: 2,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: 'Eric Norcross'
      },
      {
        id: '2474ddb0572e',
        place_1_id: '-KtxjDAagEoj-OBVcgnL',
        place_2_id: '2a434166c129',
        date: '2017-07-28 08:00:00-07',
        vote_status: false,
        winner: 2,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: 'Matt Clark'
      },
      {
        id: '2474ddb0572f',
        place_1_id: '-KtxjDAagEoj-OBVcgnL',
        place_2_id: '2a434166c129',
        date: '2017-09-15 08:00:00-07',
        vote_status: true,
        winner: null,
        createdAt: '2017-09-09 08:00:00-07',
        updatedAt: '2017-09-09 08:00:00-07',
        active: true,
        speaker: null
      }
    ]);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Bevents', null, {});
  }
};
