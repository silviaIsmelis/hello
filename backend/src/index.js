require('dotenv').config();
require('./database');
const app = require('./app');

main = () => {
      app.listen(app.get('port'));
      console.log('Servidor corriendo por el puerto', app.get('port'));
}
main();

