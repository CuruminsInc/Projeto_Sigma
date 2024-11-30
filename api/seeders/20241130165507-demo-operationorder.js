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
        clientId: 11,
        sellerId: 5,
        manufacturerId: 11,
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
        clientId: 12,
        sellerId: 6,
        manufacturerId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('operationorders', null, {});
  }
};
