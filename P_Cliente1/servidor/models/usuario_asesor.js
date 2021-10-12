import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const asesorSchema = new Schema({
  nombres: {
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  apellidos: {
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  usuario: {
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  email: {
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  contraseña: {
    type: String,
    required: [true, 'Campo obligatorio.']
  },
  codigo_unico: {
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
const usuario_asesor = mongoose.model('usuario_asesor', asesorSchema);
export default usuario_asesor;
