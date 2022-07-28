'use strict';
const bcrypt = require("bcryptjs");

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
    await queryInterface.bulkInsert('Users', [
      {
        email: 'user1@gmail.com',
        username: 'User1',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user2@gmail.com',
        username: 'User2',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user3@gmail.com',
        username: 'User3',
        hashedPassword: bcrypt.hashSync('password')
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
    const Op = Sequelize.Op
    await queryInterface.bulkDelete('Users', {
      username: { [Op.in] : ['User1', 'User2', 'User3']}
    }, {})
  }
};
