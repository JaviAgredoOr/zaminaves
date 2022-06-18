const express = require('express');
const router = express.Router();
const Nave = require('../models/nave');

router.get('/', async (req,res) => {

    const naves = await Nave.find();
    res.json(naves);    
});

router.get('/:id', async (req,res) => {
    const nave = await Nave.findById(req.params.id);
    res.json(nave);
});

router.post('/filter', async (req,res) => {    
    const naves = await Nave.find(req.body);       
    res.json(naves);    
});

router.post('/', async (req, res)=>{       
    const {tipo, nombre, sistema, ton, pais, transporte, vuelo} = req.body;
    const nuevaNave = new Nave({tipo, nombre, sistema, ton, pais, transporte, vuelo});
    console.log('Guardando nave: ',nuevaNave);
    await nuevaNave.save();
    res.json({message:'Nave guardada'});
});

router.put('/:id', async (req, res)=>{    
    const {tipo, nombre, sistema, ton, pais, transporte, vuelo} = req.body;
    const nuevaNave = {tipo, nombre, sistema, ton, pais, transporte, vuelo};
    await Nave.findByIdAndUpdate(req.params.id, nuevaNave);    
    res.json({message:'Nave actualizada'});
});


router.delete('/:id', async (req, res)=>{
    await Nave.findByIdAndDelete(req.params.id);
    res.json({message: 'Nave eliminada'});
})


module.exports = router;