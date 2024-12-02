'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('manufacturers', [
      {
        cnpj: '98.765.432/0101-99',
        company_name: 'Monsas montadora',
        brand: 'Marca A',
        contact: 'Carlos Pereira',
        business_phone: '1122336677',
        cell_phone: '11998765432',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cnpj: '98.765.432/0201-99',
        company_name: 'Dodo montadora',
        brand: 'Marca B',
        contact: 'Ana Costa',
        business_phone: '1122338899',
        cell_phone: '11998765433',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cnpj: '98.765.432/0301-99',
        company_name: 'Moboroide montadora',
        brand: 'Marca C',
        contact: 'Julio Verne',
        business_phone: '1122336677',
        cell_phone: '11998765432',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cnpj: '98.765.432/0401-99',
        company_name: 'Cagaho montadora',
        brand: 'Marca D',
        contact: 'Marcos Adriano',
        business_phone: '1122338899',
        cell_phone: '11998765433',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cnpj: '98.765.432/0501-99',
        company_name: 'Lapila montadora',
        brand: 'Marca E',
        contact: 'Lukas Wendell',
        business_phone: '1122336677',
        cell_phone: '11998765432',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('manufacturers', null, {});
  }
};
