'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OperationSell extends Model {
    static associate(models) {
      OperationSell.belongsTo(models.Client, { foreignKey: 'clientId', as: 'client' });
      OperationSell.belongsTo(models.Seller, { foreignKey: 'sellerId', as: 'seller' });
      OperationSell.belongsTo(models.Vehicle, { foreignKey: 'vehicleId', as: 'vehicle' });
    }
  }
  OperationSell.init({
    date: DataTypes.DATE,
    entry_value: DataTypes.FLOAT,
    financed_value: DataTypes.FLOAT,
    total_value: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'OperationSell',
    tableName:'operationsells'
  });
  return OperationSell;
};