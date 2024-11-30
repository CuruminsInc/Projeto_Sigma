'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vehicle.init({
    chassis_number: DataTypes.STRING,
    plate: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    manufacture_year: DataTypes.INTEGER,
    model_year: DataTypes.INTEGER,
    color: DataTypes.STRING,
    value: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Vehicle',
    tableName:'vehicles'
  });
  return Vehicle;
};