const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genre', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4 //genera automaticamente el UUID
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    freezeTableName: true,
    timestamps: false
  });
};