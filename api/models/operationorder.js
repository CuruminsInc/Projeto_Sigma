const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OperationOrder extends Model {
    static associate(models) {
      OperationOrder.belongsTo(models.Client, { foreignKey: 'clientId', as: 'client' });
      OperationOrder.belongsTo(models.Seller, { foreignKey: 'sellerId', as: 'seller' });
      OperationOrder.belongsTo(models.Manufacturer, { foreignKey: 'manufacturerId', as: 'manufacturer' });
    }
  }
  OperationOrder.init(
    {
      date: DataTypes.DATE,
      model: DataTypes.STRING,
      year: DataTypes.INTEGER,
      color: DataTypes.STRING,
      accessories: DataTypes.TEXT,
      value: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'OperationOrder',
      tableName:'operationorders'
    }
  );
  return OperationOrder;
};
