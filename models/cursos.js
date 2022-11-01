'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cursos.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    weeks: DataTypes.INTEGER,
    enroll_cost: DataTypes.FLOAT,
    minimum_skill: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cursos',
  });
  return Cursos;
};