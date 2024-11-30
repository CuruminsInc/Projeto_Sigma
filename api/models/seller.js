'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seller.init({
    code: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Seller',
    tableName:'sellers'
  });
  return Seller;
};