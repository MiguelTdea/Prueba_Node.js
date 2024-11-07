const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pelicula = sequelize.define('Pelicula', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  puntuacion: {
    type: DataTypes.TINYINT,
    allowNull: false,
    validate: { min: 1, max: 5 }
  },
  duracion: { 
    type: DataTypes.INTEGER,
    allowNull: false 
  },
  categoria_id: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'peliculas',
  timestamps: false
});

module.exports = Pelicula;
