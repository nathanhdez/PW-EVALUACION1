const express = require("express");
const incidenciasRoutes = require('./routes/incidencias');

const app = express();
const port = 3124;

app.use(express.json());
app.use('/incidencias', incidenciasRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


