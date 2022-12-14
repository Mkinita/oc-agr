import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import generarId from '../helpers/generarid.js';

const veterinarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        require:true,
        trim:true,
    },
    password:{
        type: String,
        require:true,
    },
    email:{
        type: String,
        require:true,
        unique: true,
        trim:true,
    },
    telefono:{
        type: String,
        default: null,
        trim:true,
    },
    web:{
        type: String,
        default: null,
    },
    token:{
        type: String,
        default: generarId(),
    },
    confirmado:{
        type: Boolean,
        default: false,
    },
});

veterinarioSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)
});


veterinarioSchema.methods.comprobarPassword = async function (
    paswordFormulario
){ 
    return await bcryptjs.compare(paswordFormulario,this.password);
};

const Veterinario = mongoose.model("Veterinario",veterinarioSchema);
export default Veterinario;
