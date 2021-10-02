import express from 'express';
const router = express.Router();

// importar el modelo beneficio 
import Beneficio from '../models/beneficio';

// Agregar un beneficio 
router.post('/nuevo-beneficio', async(req, res) => {
    const body = req.body;
    try {
        const beneficioDB = await Beneficio.create(body);
        res.status(200).json(beneficioDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Obtener un beneficio
router.get('/beneficio/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const beneficioDB = await Beneficio.findOne({ _id });
        res.json(beneficioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Obtener todos los beneficios
router.get('/beneficio', async(req, res) => {
    try {
        const beneficioDB = await Beneficio.find();
        res.json(beneficioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Eliminar beneficio
router.delete('/beneficio/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const beneficioDB = await Beneficio.findByIdAndDelete({ _id });
        if (!beneficioDB) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(beneficioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});


// Put actualizar un beneficio
router.put('/beneficio/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const beneficioDB = await Beneficio.findByIdAndUpdate(
            _id,
            body, {
                new: true
            });
        res.json(beneficioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Exportamos la configuración de express app 

module.exports = router;