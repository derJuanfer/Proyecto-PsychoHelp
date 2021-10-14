import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const comentarSchema = new Schema({
  contenido:{
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  fecha_publicacion:{
    type: Date,
    default: Date.now
  },
  usuario:{
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  id_foro:{
    type: String,
    required: [true, 'Campo obligatorio.']
  }
});

//Conversión a modelo
const comentar_foro = mongoose.model('comentar_foro', comentarSchema);
export default comentar_foro;
