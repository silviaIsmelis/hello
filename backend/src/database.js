const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost:27017/bd_TEA";

console.log(URI);
mongoose.connect(URI, (err, db) => {
  if (err) throw "database- " + err;
  console.log("Base de datos creada!");
});

// connection.on('connected', ()=> {console.log('Conexion correcta a MongoDB')})
// connection.on('error', ()=> {console.log('Error en la conexion a MongoDB')})

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Base de datos conectada");
});

module.exports = mongoose;
