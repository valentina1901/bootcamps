'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: 'title sólo debe tener letras'
        },
        notEmpty: {
          args: true,
          msg: 'title no debe quedar vacío'
        },
        notNull: {
          args: true,
          msg: 'Ponga el campo title'
        }
      },
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [5,15],
          msg: "text entre 5 y 15 caracteres"
        },
        notEmpty: {
          args: true,
          msg: 'text no debe quedar vacío'
        },
        notNull: {
          args: true,
          msg: 'Ponga el campo text'
        }
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [1,10],
          msg: "rating debe tener un clasificación entre 1 y 10 caracteres"
        },
        notEmpty: {
          args: true,
          msg: 'rating no debe quedar vacío'
        },
        notNull: {
          args: true,
          msg: 'Ponga el campo rating'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
    timestamps: false
  });
  return Review;
};