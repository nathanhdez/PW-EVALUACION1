const express = require('express');
const router = express.Router();

const {
  registrarIncidencia,
  obtenerEstadisticas,
  clasificacionAutomatica
} = require('../controllers/incidenciasController');

router.post('/', registrarIncidencia);
router.get('/estadisticas', obtenerEstadisticas);
router.get('/:id/clasificacion', clasificacionAutomatica);

module.exports = router;