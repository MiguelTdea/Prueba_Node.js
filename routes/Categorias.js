const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/CategoriaControler');

router.get('/', CategoriaController.getCategorias);
router.get('/:id', CategoriaController.getCategoriaById);
router.post('/', CategoriaController.createCategoria);
router.put('/:id', CategoriaController.updateCategoria);
router.delete('/:id', CategoriaController.deleteCategoria);

module.exports = router;
