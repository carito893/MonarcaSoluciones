import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre obligatorio'] },
    apellido: { type: String, required: [true, 'Apellido obligatoria'] },
    correo: { type: String, required: [true, 'correo obligatorio'] },
    contraseña: { type: String, required: [true, 'Apellido obligatoria'] },
    cargo: { type: String, required: [true, 'Cargo obligatoria'] },
    fechaIngreso: { type: Date, required: [true, 'Fecha Ingreso obligatoria'] },
    rolAdmin: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

// Convertir a modelo const 

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;