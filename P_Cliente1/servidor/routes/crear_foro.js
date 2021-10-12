import express from 'express';
const router = express.Router();

import usuario_asesor from '../models/crear_foro';

//Adición de usuario de un asesor
router.post('/nuevo_foro', async(req, res)=>{
  const body = req.body;

  try{
    const forosBD = await crear_foro.create(body);
    res.status(200).json(forosBD);
  } catch(error){
    return res.status(500).json({
      mensaje: 'Ocurrió un error',
      err
    });
  }
});

//Exporta la configuración de express
module.exports = router;
