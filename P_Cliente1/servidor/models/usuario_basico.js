import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombres: {
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  apellidos: {
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  email: {
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  sexo: {
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  usuario: {
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  fecha_nacimiento: {
    type: Date,
    required: [true, 'Campo obligatorio'],
    default: Date.now
  },
  contraseña: {
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  fecha_registro: {
    type: Date,
    required: [true, 'Campo obligatorio'],
    default: Date.now
  }
});

//Conversión a modelo
const usuario_basico = mongoose.model('usuario_basico', usuarioSchema);
export default usuario_basico;
