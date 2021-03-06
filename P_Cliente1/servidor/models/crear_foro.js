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
  usuario:{
    type: String,
    required: [true, 'Campo obligatorio.']
  }
});

//Conversión a modelo
const crear_foro = mongoose.model('crear_foro', cforoSchema);
export default crear_foro;
