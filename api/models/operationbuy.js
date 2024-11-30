const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OperationBuy extends Model {
    static associate(models) {
      OperationBuy.belongsTo(models.Client, { foreignKey: 'clientId', as: 'client' });
      OperationBuy.belongsTo(models.Seller, { foreignKey: 'sellerId', as: 'seller' });
      OperationBuy.belongsTo(models.Vehicle, { foreignKey: 'vehicleId', as: 'vehicle' });
    }
  }
  OperationBuy.init(
    {
      date: DataTypes.DATE,
      value: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'OperationBuy',
      tableName: 'operationbuys',
    }
  );
  return OperationBuy;
};
