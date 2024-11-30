'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sellers', [
      {
        code: 'S001',
        username: 'joao_seller',
        password: 123456,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'S002',
        username: 'maria_seller',
        password: 654321,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sellers', null, {});
  }
};
