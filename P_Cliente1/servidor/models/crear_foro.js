import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cforoSchema = new Schema({
  titulo:{
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  texto:{
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  fecha_publicacion:{
    type: Date,
    default: Date.now
  },
  //El usuario deberá ser obtenido de la base de datos, pero aún no sé cómo hacer eso.
  usuario:{
    type: String,
    required: [true, 'Campo obligatorio.']
  }
});

//Conversión a modelo
const crear_foro = mongoose.model('crear_foro', cforoSchema);
export default crear_foro;
