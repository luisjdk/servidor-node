const http = require("http");
const chalk = require("chalk");

const host = "localhost";
const puerto = 8000;

const servidor = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const mensaje = JSON.stringify({
    nombre: "Jose Luis Soto",
    mensaje: "¡Servidor en Node!",
  });

  res.end(mensaje);
});

servidor.listen(puerto, host, () => {
  console.log(
    chalk.green(`Servidor ejecutándose en http://${host}:${puerto}/`)
  );
});
