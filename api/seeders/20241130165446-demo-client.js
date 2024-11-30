'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clients', [
      {
        cpf: '123.456.789-00',
        name: 'João da Silva',
        neighborhood: 'Centro',
        city: 'São Paulo',
        state: 'SP',
        home_phone: '1122334455',
        cell_phone: '11987654321',
        income: 3000.50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cpf: '987.654.321-00',
        name: 'Maria Oliveira',
        neighborhood: 'Zona Sul',
        city: 'São Paulo',
        state: 'SP',
        home_phone: '1122334456',
        cell_phone: '11987654322',
        income: 4000.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clients', null, {});
  }
};
