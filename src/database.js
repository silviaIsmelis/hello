const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb+srv://sa:mongodb88@cluster88.o1oql6j.mongodb.net/testTea?retryWrites=true&w=majority";

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
