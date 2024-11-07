// Importa solo desde associations.js
const { Categoria, Pelicula } = require('../config/association');

const getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCategoriaById = async (req, res) => {
  try {
    const categoria = await Categoria.findByPk(req.params.id, {
      include: [{
        model: Pelicula, 
        as: 'peliculas'
      }]
    });

    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCategoria = async (req, res) => {
  const { nombre } = req.body;
  try {
    const categoria = await Categoria.create({ nombre });
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCategoria = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    categoria.nombre = nombre;
    await categoria.save();
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    await categoria.destroy();
    res.json({ message: 'Categoría eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getCategorias,
    getCategoriaById,
    createCategoria,
    updateCategoria,
    deleteCategoria 
};
