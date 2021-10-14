import express from 'express';
const router = express.Router();

import usuario_basico from '../models/usuario_basico';

//Adición de usuario
router.post('/nuevo_usuario', async(req, res)=>{
  const body = req.body;

  try{
    const usuarioBD = await usuario_basico.create(body);
    res.status(200).json(usuarioBD);
  } catch(error){
    return res.status(500).json({
      mensaje: 'Ocurrió un error',
      err
    });
  }
});

router.get('/nuevo_usuario', async(req, res)=>{
  try {
   const usuarioBD = await usuario_basico.find({})
   res.json(usuarioBD);
  } catch (error) {
    console.log(error);
  }
});

router.get('/nuevo_usuario/:id', async(req, res)=>{
  const _id=req.params.id;
  try {
    const usuarioBD= await usuario_basico.findOne({_id});
    res.json(usuarioBD);
  } catch (error) {
    return res.status(500).json({
      mensaje:'Ocurrio un error',
      error
    })
  }
});

router.put('/nuevo_usuario/:id', async(req, res)=>{
  const _id=req.params.id;
  const body = req.body;
  try{
    const usuarioBD = await usuario_basico.findByIdAndUpdate(_id, body, {new: true})
    res.json(usuarioBD)
  } catch(error){
    return res.status(500).json({
      mensaje: "Ocurrió un error.",
      error
    })
  }
})

//Exporta la configuración de express
module.exports = router;
