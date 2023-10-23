const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const CLIENTE_SERVICE = 'clienteService';

// Lista de todos los clientes
router.get('/clientes', asyncHandler(async (req, res) => {
  res.send(await res.app.get(CLIENTE_SERVICE).getAll());
}));

// Detalle de un cliente
router.get('/clientes/:id', asyncHandler(async (req, res) => {
  const response = await res.app.get(CLIENTE_SERVICE).getById(req.params.id);
  if (response) {
    res.send(response);
  } else {
    res.sendStatus(404);
  }
}));

// Crear un cliente
router.post('/clientes', asyncHandler(async (req, res) => {
  res.status(201).send(await res.app.get(CLIENTE_SERVICE).save(req.body));
}));

// Modificar un cliente
router.put('/clientes/:id', asyncHandler(async (req, res) => {
  const response = await res.app.get(CLIENTE_SERVICE).update(req.params.id, req.body);
  if (response) {
    res.status(200).send(response);
  } else {
    res.sendStatus(404);
  }
}));

// Eliminar un cliente
router.delete('/clientes/:id', asyncHandler(async (req, res) => {
  const deleted = await res.app.get(CLIENTE_SERVICE).deleteById(req.params.id);
  res.status(deleted.count == 1 ? 204 : 404).end();
}));

module.exports = router;
