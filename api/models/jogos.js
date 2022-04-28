'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Jogos.init({
    titulo: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    categoria: DataTypes.STRING,
    preco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jogos',
  });
  return Jogos;
};