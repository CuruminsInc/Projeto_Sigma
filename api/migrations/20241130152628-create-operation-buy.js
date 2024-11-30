module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('operationbuys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clients', // Nome da tabela referenciada
          key: 'id', // Nome da coluna referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      sellerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sellers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      vehicleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'vehicles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      value: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('operationbuys');
  },
};
