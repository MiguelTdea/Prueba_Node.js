const Categoria = require('../models/Categoria');
const Pelicula = require('../models/Pelicula');

// Define las relaciones
Categoria.hasMany(Pelicula, { foreignKey: 'categoria_id', as: 'peliculas' });
Pelicula.belongsTo(Categoria, { foreignKey: 'categoria_id', as: 'categoria' });

module.exports = { Categoria, Pelicula };
