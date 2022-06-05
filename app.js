const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
    res.render("index", { titulo: "Titulo dinamico" });
});
app.get("/Contacto", (req, res) => {
  res.render("Contacto", { TituloContacto: "Informacion de contacto" });
});
app.get("/proximamente", (req, res) => {
  res.render("proximamente", { Tituloxd: "Mas utilidades seran agregadas proximamente" });
});
//Estado 404 de pagina
app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "Error 404",
    descripcion: "Ubicación no encontrada",
  });
});


app.listen(port, () => {
  console.log('Servidor escuchando en el puerto', port);
});
