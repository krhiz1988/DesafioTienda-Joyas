const express = require('express')
const app = express()

const indexRoutes = require('./Routes/indexRoutes');

const cors = require('cors')
app.use(cors())
app.use('/', indexRoutes);
app.use((req, res, next) => {
    const parametros = req.params;
    const url = req.url;
    console.log(`
      Hoy ${new Date()}
      Se ha recibido una consulta en la ruta ${url}
      con los parámetros: `, parametros)
    return next();
  });


  



app.listen(8000, console.log('Server ON'))