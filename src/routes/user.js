const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemaUser = new eschema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  nombre: String,
  email: String,
  telefono: String,
});


const ModelUser = mongoose.model("user", eschemaUser);

module.exports = router;

// Insertar usuario
router.post("/agregarUser", (req, res) => {
  const nuevoUser = new ModelUser({
    username: req.body.username,
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
  });
  nuevoUser.save((err) => {
    if (!err) {
      res.send("Usuario agregado correctamente");
    } else {
      res.send("Error" + err);
    }
  });
});

// Listar usuarios
router.get("/listarUser", (req, res) => {
  ModelUser.find().then((docs) => {
    res.json(docs);
  });
  //   res.end('Cargando Listado de Usuarios');
});

//#Editar y actualizar

// Obtener usuario
router.post("/obtenerUser", (req, res) => {
  ModelUser.findById({ iduser: req.body.iduser })
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Editar usuario
router.post("/editarUser", (req, res) => {
  ModelUser.findOneAndUpdate(
    { iduser: req.body.iduser },
    {
      username: req.body.username,
      nombre: req.body.nombre,
      email: req.body.email,
      telefono: req.body.telefono,
    }
  )
    .then(() => {
      res.json("Usuario actualizado satisfactoriamente");
    })
    .catch((err) => {
      res.status(400).send("No se puede actualizar el usuario " + err);
    });

});

// Eliminar usuario
router.post("/deleteUser", (req, res) => {
  ModelUser.findOneAndDelete({ iduser: req.body.iduser }).then(
    (user,err) => {
      if (err) res.json(err);     
      else res.json("Usuario " + user + " eliminado satisfactoriamente");
    }
  );
});
