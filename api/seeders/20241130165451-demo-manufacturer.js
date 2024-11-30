'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('manufacturers', [
      {
        cnpj: '12.345.678/0001-99',
        company_name: 'Fabricante A',
        brand: 'Marca A',
        contact: 'Carlos Pereira',
        business_phone: '1122336677',
        cell_phone: '11998765432',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cnpj: '98.765.432/0001-99',
        company_name: 'Fabricante B',
        brand: 'Marca B',
        contact: 'Ana Costa',
        business_phone: '1122338899',
        cell_phone: '11998765433',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('manufacturers', null, {});
  }
};
