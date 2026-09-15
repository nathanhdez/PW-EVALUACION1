const incidencias = require('../data/incidencias.js');
const {
    cadenaValida,
    validarPrioridad,
    generarId,
} = require('../utils/helpers.js');

function registrarIncidencia(req, res){
  const { empleado, area, descripcion, prioridad } = req.body;

  if (!empleado || !area || !descripcion || !prioridad) {
    return res.status(400).json({error: 'Todos los campos son obligatorios.',});
  }

  if (!cadenaValida(empleado) ||
      !cadenaValida(area) ||
      !cadenaValida(descripcion) ||
      !cadenaValida(prioridad)
  ) {
    return res.status(400).json({error: 'No se permiten campos con cadenas vacias.',});
  }

  if (!validarPrioridad(prioridad)) {
    return res.status(400).json({mensaje: 'La prioridad debe ser "Alta", "Media" o "Baja",'});
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

  return res.status(201).json({Mensaje: 'Incidencia registrada correctamente.',});
}

module.exports = {
    registrarIncidencia,
};