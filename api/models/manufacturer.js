'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manufacturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Manufacturer.init({
    cnpj: DataTypes.STRING,
    company_name: DataTypes.STRING,
    brand: DataTypes.STRING,
    contact: DataTypes.STRING,
    business_phone: DataTypes.STRING,
    cell_phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Manufacturer',
    tableName: 'manufacturers',
  });
  return Manufacturer;
};