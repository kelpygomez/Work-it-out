const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos de la carpeta 'www' (versión de producción)
app.use(express.static(path.join(__dirname, 'www')));

// Escuchar en el puerto 8100
const PORT = process.env.PORT || 8100;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
