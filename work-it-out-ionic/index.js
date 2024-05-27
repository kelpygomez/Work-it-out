const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos de la carpeta 'www' (versión de producción)
app.use(express.static(path.join(__dirname, 'www')));

// Redirigir todas las rutas a index.html para que Angular pueda manejarlas
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

// Escuchar en el puerto 8100
const PORT = process.env.PORT || 8100;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
