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
    title:{
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
    description:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [5,15],
          msg: "description entre 5 y 15 caracteres"
        },
        notEmpty: {
          args: true,
          msg: 'description no debe quedar vacío'
        },
        notNull: {
          args: true,
          msg: 'Ponga el campo description'
        }
      },
    },
    weeks:  {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Weeks sólo debe tener números'
        },
        notEmpty: {
          args: true,
          msg: 'Weeks no debe quedar vacío'
        },
        notNull: {
          args: true,
          msg: 'Ponga el campo Weeks'
        }
      }
    },
    enroll_cost: {
      type: DataTypes.FLOAT,
      allowNull:false,
      validate: {
        isNumeric: {
          args: true,
          msg: 'enroll_cost sólo debe tener números'
        },
        notEmpty: {
          args: true,
          msg: 'enroll_cost no debe quedar vacío'
        },
        notNull: {
          args: true,
          msg: 'Ponga el campo enroll_cost'
        }
      }
    },
    minimum_skill: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        isAlpha: {
          args: true,
          msg: 'minimum_skill sólo debe tener letras'
        },
        notEmpty: {
          args: true,
          msg: 'minimum_skill no debe quedar vacío'
        },
        notNull: {
          args: true,
          msg: 'Ponga el campo minimum_skill'
        }
      }
    },
  }, 
  {
    sequelize,
    modelName: 'Cursos',
    timestamps: false
  });
  return Cursos;
};