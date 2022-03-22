const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    spoonacularScore: {
      type: DataTypes.FLOAT(1),
      validate: {
        min: 0,
        max: 100
      }
    },
    healthScore:{
      type: DataTypes.FLOAT(1),
      allowNull: false,
      validate: {
        min: 0,
        max: 100
      }
    },
    instructions: {
      type:DataTypes.STRING
    },
    image:{
      type: DataTypes.STRING
    },
  });
};
