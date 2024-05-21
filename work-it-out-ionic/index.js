const express = require("express");
const path = require("path");
const app = express();

// Servir archivos estáticos de la aplicación Ionic desde /www
app.use("", express.static(path.join(__dirname, "work-it-out-ionic", "www")));

// Redirigir todas las solicitudes a Ionic (excepto las que comiencen con /api)
app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "work-it-out-ionic", "www", "index.html"));
});

// Escuchar en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
