import express from 'express';
const router = express.Router();

import usuario_asesor from '../models/usuario_asesor';

//Adición de usuario de un asesor
router.post('/nuevo_asesor', async(req, res)=>{
  const body = req.body;

  try{
    const asesorBD = await usuario_asesor.create(body);
    res.status(200).json(asesorBD);
  } catch(error){
    return res.status(500).json({
      mensaje: 'Ocurrió un error',
      err
    });
  }
});

//Exporta la configuración de express
module.exports = router;
