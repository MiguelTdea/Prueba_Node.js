const { body, validationResult } = require('express-validator');

// Middleware de validación para películas
const validatePelicula = [
  body('nombre').isString().withMessage('El nombre debe ser un texto').notEmpty().withMessage('El nombre es obligatorio'),
  body('descripcion').isString().notEmpty().withMessage('La descripción debe ser un texto y ndeede ser vacía'),
  body('puntuacion').isInt({ min: 1, max: 5 }).withMessage('La puntuación debe ser un número entre 1 y 5'),
  body('duracion').isInt({ min: 1 }).withMessage('La duración debe ser un número positivo'),
  body('categoria_id').isInt().withMessage('El ID de la categoría debe ser un número entero')
];

// Middleware para manejar errores de validación
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validatePelicula, handleValidationErrors };