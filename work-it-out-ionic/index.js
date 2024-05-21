const express = require("express");
const path = require("path");
const app = express();

// Servir archivos estáticos de la aplicación Angular desde /work-it-out-ionic/deploy
app.use("", express.static(path.join(__dirname, "work-it-out-ionic", "deploy")));

// Redirigir todas las solicitudes a Angular (excepto las que comiencen con /api)
app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "work-it-out-ionic", "deploy", "index.html"));
});

// Escuchar en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
