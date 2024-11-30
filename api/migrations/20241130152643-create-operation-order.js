module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('operationorders', {
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
      manufacturerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'manufacturers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      model: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      color: {
        type: Sequelize.STRING,
      },
      accessories: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('operationorders');
  },
};
