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
    await queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        title: 'Blue Era',
        description: "An album crafted in Jaime's 'blue period'.",
        imageUrl: 'https://bicbugs.com/wp-content/uploads/2019/02/Torynorrhina-flammea-blue-1.jpg'
      },
      {
        userId: 2,
        title: 'Oa',
        description: "An album about John's home away from home.",
        imageUrl: 'https://static.wikia.nocookie.net/marvel_dc/images/d/d3/Oa_002.jpg/revision/latest?cb=20101024030929'
      },
      {
        userId: 3,
        title: 'Last Son',
        description: "An album reflecting on a home you can't return to.",
        imageUrl: 'https://images.theconversation.com/files/115878/original/image-20160321-30941-13zd3rr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
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
