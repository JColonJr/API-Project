'use strict';

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
    await queryInterface.bulkInsert('PlaylistsSongs', [
      {
        playlistId: '1',
        songId: ['1', '2', '3']
      },
      {
        playlistId: '2',
        songId: ['1', '2', '3']
      },
      {
        playlistId: '3',
        songId: ['1', '2', '3']
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
