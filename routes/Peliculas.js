const express = require('express');
const router = express.Router();
const PeliculaController = require('../controllers/PeliculaController');
const { validatePelicula, handleValidationErrors } = require('../middleware/validator');

router.get('/', PeliculaController.getPeliculas);
router.get('/:id', PeliculaController.getPeliculaById);
router.post('/',validatePelicula,handleValidationErrors ,PeliculaController.createPelicula);
router.put('/:id',validatePelicula,handleValidationErrors, PeliculaController.updatePelicula);
router.delete('/:id', PeliculaController.deletePelicula);

module.exports = router;
