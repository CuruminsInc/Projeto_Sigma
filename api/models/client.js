'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init({
    cpf: DataTypes.STRING,
    name: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    home_phone: DataTypes.STRING,
    cell_phone: DataTypes.STRING,
    income: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Client',
    tableName: 'clients',
  });
  return Client;
};