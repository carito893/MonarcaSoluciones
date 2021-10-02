import express from 'express';
const router = express.Router();

// importar el modelo usuario 
import Usuario from '../models/usuario';

// Agregar un usuario 
router.post('/nuevo-usuario', async(req, res) => {
    const body = req.body;
    try {
        const usuarioDB = await Usuario.create(body);
        res.status(200).json(usuarioDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Obtener un usuario
router.get('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const usuarioDB = await Usuario.findOne({ _id });
        res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Obtener todos los usuarios
router.get('/usuario', async(req, res) => {
    try {
        const usuarioDB = await Usuario.find();
        res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Eliminar usuario
router.delete('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const usuarioDB = await Usuario.findByIdAndDelete({ _id });
        if (!usuarioDB) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});


// Put actualizar un usuario 
router.put('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const usuarioDB = await Usuario.findByIdAndUpdate(
            _id,
            body, {
                new: true
            });
        res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Exportamos la configuración de express app 

module.exports = router;