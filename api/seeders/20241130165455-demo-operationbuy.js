'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('operationbuys', [
      {
        date: new Date(),
        value: 50000.00,
        clientId: 1,
        sellerId: 1,
        vehicleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(),
        value: 30000.00,
        clientId: 2,
        sellerId: 2,
        vehicleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('operationbuys', null, {});
  }
};
