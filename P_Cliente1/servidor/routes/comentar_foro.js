import express from 'express';
const router = express.Router();

import comentar_foro from '../models/comentar_foro';

//Adición de usuario de un asesor
router.post('/comentario', async(req, res)=>{
  const body = req.body;

  try{
    const comentariosBD = await comentar_foro.create(body);
    res.status(200).json(comentariosBD);
  } catch(error){
    return res.status(500).json({
      mensaje: 'Ocurrió un error',
      err
    });
  }
});

router.get('/comentario', async(req, res)=>{
  try {
   const comentariosBD = await comentar_foro.find({})
   res.json(comentariosBD);
  } catch (error) {
    console.log(error);
  }
});

//Exporta la configuración de express
module.exports = router;
