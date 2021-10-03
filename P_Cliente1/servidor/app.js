import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

//Habilitar express
const app = express();

//Conexión a base de datos
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/P_PH';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then(
  () => {
    console.log("Conexión a BD exitosa.");
  },
  err => { err }
);

//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


//Rutas
app.use('/api', require('./routes/usuario_basico'));
app.use('/api', require('./routes/usuario_asesor'));

//Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//Puerto dinámico
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function(){
  console.log('El servidor escucha por el puerto ' + app.get('puerto'));
});
