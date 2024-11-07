const Pelicula = require('../models/Pelicula');



const getPeliculas = async (req, res) => {
  try {
    // Obtener el número de página y el límite desde los parametros de la consulta 
    // Página actual por defecto establecida obviamente en  1
    const page = parseInt(req.query.page) || 1;
    // Cantidad de resultados por página por defecto mostrar 3 tambien puede ser cambiado por consulta
    const limit = parseInt(req.query.limit) || 3; 

    // Calcular el desplazamiento y el límite de resultados
    const offset = (page - 1) * limit;

    // Consultar las películas con limit y offset
    const peliculas = await Pelicula.findAndCountAll({
      limit: limit,
      offset: offset
    });

    // Calcular el total de páginas
    const totalPages = Math.ceil(peliculas.count / limit);

    res.json({
      data: peliculas.rows,
      meta: {
        total: peliculas.count,
        page: page,
        totalPages: totalPages
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




const getPeliculaById = async (req, res) => {
    const { id } = req.params;
    try {
        const pelicula = await Pelicula.findByPk(id);
        if (!pelicula) {
        return res.status(404).json({ message: 'Pelicula no encontrada' });
        }
        res.json(pelicula);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createPelicula = async (req, res) => {
    const { nombre,descripcion ,puntuacion, duracion, categoria_id } = req.body;
    try {
        const pelicula = await Pelicula.create({ nombre,descripcion ,puntuacion , duracion, categoria_id });
        res.status(201).json(pelicula);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePelicula = async (req, res) => {
    const { id } = req.params;
    const { nombre,descripcion, puntuacion , duracion, categoria_id } = req.body;
    try {
        const pelicula = await Pelicula.findByPk(id);
        if (!pelicula) {
        return res.status(404).json({ message: 'Pelicula no encontrada' });
        }
        pelicula.nombre = nombre;
        pelicula.descripcion = descripcion;
        pelicula.puntuacion = puntuacion;
        pelicula.duracion = duracion;
        pelicula.categoria_id = categoria_id;
        await pelicula.save();
        res.json(pelicula);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletePelicula = async (req, res) => {
    const { id } = req.params;
    try {
        const pelicula = await Pelicula.findByPk(id);
        if (!pelicula) {
        return res.status(404).json({ message: 'Pelicula no encontrada' });
        }
        await pelicula.destroy();
        res.json({ message: 'Pelicula eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



    module.exports = {
         getPeliculas,
         getPeliculaById,
         createPelicula,
         updatePelicula,
         deletePelicula
        };
