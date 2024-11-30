'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('operationbuys', [
      {
        date: new Date(),
        value: 50000.00,
        clientId: 11,
        sellerId: 5,
        vehicleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(),
        value: 30000.00,
        clientId: 12,
        sellerId: 6,
        vehicleId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('operationbuys', null, {});
  }
};
