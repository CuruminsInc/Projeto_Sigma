'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('operationsells', [
      {
        date: new Date(),
        clientId: 1,
        sellerId: 1,
        vehicleId: 1,
        entry_value: 10000.00,
        financed_value: 40000.00,
        total_value: 50000.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(),
        clientId: 2,
        sellerId: 2,
        vehicleId: 2,
        entry_value: 15000.00,
        financed_value: 15000.00,
        total_value: 30000.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('operationsells', null, {});
  }
};
