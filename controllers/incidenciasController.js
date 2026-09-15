const incidencias = require('../data/incidencias.js');
const {
  cadenaValida,
  validarPrioridad,
  generarId,
} = require('../utils/helpers.js');

function registrarIncidencia(req, res) {
  const { empleado, area, descripcion, prioridad } = req.body;

  if (!empleado || !area || !descripcion || !prioridad) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  if (!cadenaValida(empleado) ||
    !cadenaValida(area) ||
    !cadenaValida(descripcion) ||
    !cadenaValida(prioridad)
  ) {
    return res.status(400).json({ error: 'No se permiten campos con cadenas vacias.' });
  }

  if (!validarPrioridad(prioridad)) {
    return res.status(400).json({ mensaje: 'La prioridad debe ser "Alta", "Media" o "Baja",' });
  }

  const nuevaIncidencia = {
    id: generarId(incidencias),
    empleado: empleado.trim(),
    area: area.trim(),
    descripcion: descripcion.trim(),
    prioridad: prioridad.trim(),
    estado: "Pendiente",
  };

  incidencias.push(nuevaIncidencia);

  return res.status(201).json({ Mensaje: 'Incidencia registrada correctamente.' });
}

// 7. Endpoint de estadistica
function obtenerEstadisticas(req, res) {
  const estadisticas = {
    totalIncidencias: incidencias.length,
    pendientes: incidencias.filter(item => item.estado.toLowerCase() === 'pendiente').length,
    enProceso: incidencias.filter(item => item.estado.toLowerCase() === 'en proceso').length,
    resueltas: incidencias.filter(item => item.estado.toLowerCase() === 'resuelta').length,
    canceladas: incidencias.filter(item => item.estado.toLowerCase() === 'cancelada').length
  };

  return res.status(200).json(estadisticas);
}

// 8. Clasificación Automática
function clasificacionAutomatica(req, res) {
  const id = Number(req.params.id);

  const incidencia = incidencias.find(item => item.id === id);

  if (!incidencia) {
    return res.status(404).json({
      mensaje: "Incidencia no encontrada"
    });
  }

  let clasificacion = "";

  switch (incidencia.prioridad.trim().toLowerCase()) {
    case 'alta':
      clasificacion = "Crítica";
      break;
    case 'media':
      clasificacion = "Importante";
      break;
    case 'baja':
      clasificacion = "Normal";
      break;
    default:
      clasificacion = "Desconocida";
      break;
  }

  return res.status(200).json({
    id: incidencia.id,
    clasificacion: clasificacion
  });
}

module.exports = {
  registrarIncidencia,
  obtenerEstadisticas,
  clasificacionAutomatica
};