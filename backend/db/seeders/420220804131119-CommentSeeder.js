'use strict';

const {Song, User} = require('../models')

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Comments', [
      {
        userId: 3,
        songId: 1,
        body: 'ON REPEAT'
      },
      {
        userId: 2,
        songId: 3,
        body: 'Felt this in my soul'
      },
      {
        userId: 1,
        songId: 2,
        body: 'NEED Hal for a remix'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
