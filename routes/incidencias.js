const express = require('express');
const router = express.Router();

const {
  registrarIncidencia,
  listarIncidencias,          
  buscarIncidenciaPorId,      
  obtenerEstadisticas,
  clasificacionAutomatica
} = require('../controllers/incidenciasController');

router.get('/', listarIncidencias);
router.post('/', registrarIncidencia);
router.get('/:id', buscarIncidenciaPorId);
router.get('/estadisticas', obtenerEstadisticas);
router.get('/:id/clasificacion', clasificacionAutomatica);

module.exports = router;