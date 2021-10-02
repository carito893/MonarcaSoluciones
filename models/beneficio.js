import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const beneficioSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre obligatorio'] },
    descripcion: { type: String, required: [true, 'Descripción obligatoria'] },
    categoria: { type: String, required: [true, 'Categoria obligatoria'] },
    cantidad: { type: Number, required: [true, 'Cantidad obligatoria'] },
    usuarios: String,
    imagen: String,
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

// Convertir a modelo const 

const Beneficio = mongoose.model('Beneficio', beneficioSchema);

export default Beneficio;