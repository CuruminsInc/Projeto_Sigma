'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('operationorders', [
      {
        date: new Date(),
        model: 'Fusca',
        year: 1970,
        color: 'Azul',
        accessories: 'Ar condicionado',
        value: 25000.00,
        clientId: 1,
        sellerId: 1,
        manufacturerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(),
        model: 'Civic',
        year: 2022,
        color: 'Preto',
        accessories: 'Teto solar',
        value: 90000.00,
        clientId: 2,
        sellerId: 2,
        manufacturerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('operationorders', null, {});
  }
};
