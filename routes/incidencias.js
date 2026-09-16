const express = require('express');
const router = express.Router();

const {
  registrarIncidencia,
  listarIncidencias,          
  buscarIncidenciaPorId,      
  obtenerEstadisticas,
  clasificacionAutomatica,
  cambiarEstado,
  eliminarIncidencia
} = require('../controllers/incidenciasController');

router.get('/', listarIncidencias);
router.post('/', registrarIncidencia);
router.get('/estadisticas', obtenerEstadisticas);
router.get('/:id', buscarIncidenciaPorId);
router.put('/:id/estado', cambiarEstado);
router.delete('/:id', eliminarIncidencia);
router.get('/:id/clasificacion', clasificacionAutomatica);

module.exports = router;