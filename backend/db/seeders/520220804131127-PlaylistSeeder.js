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
    await queryInterface.bulkInsert('Playlists', [
      {
        userId: 1,
        name: "Scarab's Faves",
        imageUrl: 'https://www.dc.com/sites/default/files/imce/2016/08-AUG/BLUEREB_Cv1_square_57c0e695627c18.80082542.jpg'
      },
      {
        userId: 2,
        name: "Space Vibes",
        imageUrl: 'https://static01.nyt.com/images/2022/07/12/science/space/12vid-space_02_still/12vid-space_02_still-mediumSquareAt3X.jpg'
      },
      {
        userId: 3,
        name: "Solitude",
        imageUrl: 'https://static.wikia.nocookie.net/justice-league-action/images/2/2e/Fortress_of_solitude.jpg/revision/latest?cb=20190923014516'
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
