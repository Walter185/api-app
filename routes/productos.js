const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const PRODUCTO_SERVICE = 'productoService';

// Lista de todos los producto

router.get('/', asyncHandler(async (req, res) => {
  res.send(await res.app.get(PRODUCTO_SERVICE).getAll());
}));

// Detalle de un producto

router.get('/:id', asyncHandler(async (req, res) => {
  const response = await res.app.get(PRODUCTO_SERVICE).getById(req.params.id);
  if (response) {
    res.send(response);
  } else {
    res.sendStatus(404);
  }
}));

// Crear un producto

router.post('/', asyncHandler(async (req, res) => {
  res.status(201).send(await res.app.get(PRODUCTO_SERVICE).save(req.body));
}));

// Modificar un producto

router.put('/:id', asyncHandler(async (req, res) => {
  const response = await res.app.get(PRODUCTO_SERVICE).update(req.params.id, req.body);
  if (response) {
    res.status(200).send(response);
  } else {
    res.sendStatus(404);
  }
}));

// Eliminar un producto

router.delete('/:id', asyncHandler(async (req, res) => {
  const deleted = await res.app.get(PRODUCTO_SERVICE).deleteById(req.params.id);
  res.status(deleted.count == 1 ? 204 : 404).end();
}));

module.exports = router;
