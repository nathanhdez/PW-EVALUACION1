const express = require('express');
const router = express.Router();

const {
    registrarIncidencia
} = require('../controllers/incidenciasControllers');

router.post('/', registrarIncidencia);

module.exports = router;