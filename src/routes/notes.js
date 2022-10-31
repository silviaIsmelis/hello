const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemaNote = new eschema({
  title: String,
  content: {
    type: String,
    required: true
  },
  date: String, 
  author: String,
  idnota: String,
});

const ModelNota = mongoose.model("nota", eschemaNote);

module.exports = router;

// Insertar nota
router.post("/agregarNota", (req, res) => {
  const nuevoNota = new ModelNota({
    title: req.body.title,
    content: req.body.content,
    date: req.body.date,
    author: req.body.author,
    idnota: req.body.idnota,
  });
  nuevoNota.save((err) => {
    if (!err) {
      res.send("Nota agregada correctamente");
    } else {
      res.send("Error" + err);
    }
  });
});

// Listar las notas
router.get("/listarNotas", (req, res) => {
  ModelNota.find().then((docs) => {
    res.json(docs);
  });
  //   res.end('Cargando Listado de Usuarios');
});

// Obtener nota
router.post("/obtenerNota", (req, res) => {
  ModelNota.findById({ idnota: req.body.idnota })
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Actualizar nota
router.post("/editarNota", (req, res) => {
  ModelUser.findOneAndUpdate(
    { idnota: req.body.idnota },
    {
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        author: req.body.author
    }
  )
    .then(() => {
      res.json("Nota actualizada satisfactoriamente");
    })
    .catch((err) => {
      res.status(400).send("No se puede actualizar la nota " + err);
    });
});

// Eliminar nota
router.post("/deleteNota", (req, res) => {
  ModelUser.findOneAndDelete({ idnota: req.body.idnota }).then((nota, err) => {
    if (err) res.json(err);
    else res.json("Nota " + nota + " eliminada satisfactoriamente");
  });
});
