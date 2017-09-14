'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bevents', [
      {
        id: '-KtxjbFS26AQXfzQYAUl',
        place_1_id: '-Ktxi4P2OuwhsvgPyq0N',
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
        id: '-KtxjwztazuJfFOqAD9j',
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
        id: '-Ktxk5b1r2aEuFt46WJj',
        place_1_id: '-Ktxi4P2OuwhsvgPyq0N',
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
        id: '-KtxkMgU-fX7oEsOf4-t',
        place_1_id: '-KtxjDAagEoj-OBVcgnL',
        place_2_id: '-Ktxi4P2OuwhsvgPyq0N',
        date: '2017-07-28 08:00:00-07',
        vote_status: false,
        winner: 2,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: 'Matt Clark'
      },
      {
        id: '-KtxkVbP85Lpcn5z04_y',
        place_1_id: '-KtxjDAagEoj-OBVcgnL',
        place_2_id: '-Ktxi4P2OuwhsvgPyq0N',
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
