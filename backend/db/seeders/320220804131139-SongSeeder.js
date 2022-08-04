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
    await queryInterface.bulkInsert('Songs', [
      {
        userId: 1,
        albumid: 1,
        title: "Breaking Out My Shell",
        description: 'A song about being more outgoing.',
        url: 'https://youtu.be/nvRz8KxMhYU',
        imageUrl: 'https://bicbugs.com/wp-content/uploads/2019/02/Torynorrhina-flammea-blue-1.jpg'
      },
      {
        userId: 2,
        albumid: 2,
        title: "Fear Killer",
        description: 'A song about facing my fears.',
        url: 'https://youtu.be/7yiNq_fZ7Wk',
        imageUrl: 'https://static.wikia.nocookie.net/marvel_dc/images/d/d3/Oa_002.jpg/revision/latest?cb=20101024030929'
      },
      {
        userId: 3,
        albumid: 3,
        title: "Kryptonite",
        description: 'A song about weaknesses.',
        url: 'https://youtu.be/fO5tcJA0m48',
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
