'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('operationsells', [
      {
        date: new Date(),
        clientId: 11,
        sellerId: 5,
        vehicleId: 5,
        entry_value: 10000.00,
        financed_value: 40000.00,
        total_value: 50000.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(),
        clientId: 12,
        sellerId: 6,
        vehicleId: 6,
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
