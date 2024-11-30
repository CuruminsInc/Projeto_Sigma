'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehicles', [
      {
        chassis_number: '9BWZZZ377VT004251',
        plate: 'ABC-1234',
        brand: 'Volkswagen',
        model: 'Fusca',
        manufacture_year: 1970,
        model_year: 1971,
        color: 'Azul',
        value: 25000.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chassis_number: '1HGCM82633A123456',
        plate: 'XYZ-5678',
        brand: 'Honda',
        model: 'Civic',
        manufacture_year: 2022,
        model_year: 2022,
        color: 'Preto',
        value: 90000.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vehicles', null, {});
  }
};
