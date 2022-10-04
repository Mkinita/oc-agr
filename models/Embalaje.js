import mongoose from 'mongoose';


const embalajesSchema = mongoose.Schema( {
    veterinario:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Veterinario"
    },
    cliente:{
        type: String,
        require:true,
    },
    armado:{
        type: String,
        require:true,
    },
    calidad:{
        type: String,
        require:true,
    },
    pintura:{
        type: String,
        require:true,
    },
    img:{
        type: String,
        require:true,
    },
    },  
    {
        timestamps:true,
    }
);


const Embalaje = mongoose.model("Embalaje", embalajesSchema);


export default Embalaje;