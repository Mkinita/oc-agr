import mongoose from 'mongoose';


const pacientesSchema = mongoose.Schema( {
    veterinario:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Veterinario"
    },
    tipo:{
        type: String,
        require:true,
    },
    cliente:{
        type: String,
        require:true,
    },
    numeroOc:{
        type: Intl,
        require:true,
    },
    producto:{
        type: String,
        require:true,
    },
    suma:{
        type: Intl,
        require:true,
    },
    numero1:{
        type: Intl,
        require:true,
    },
    },  
    {
        timestamps:true,
    }
);



const Paciente = mongoose.model("Paciente", pacientesSchema);



export default Paciente;