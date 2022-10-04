import Rema from "../models/Rema.js"


const agregarRema = async (req, res) =>{
    const rema = new Rema(req.body);
    rema.veterinario = req.veterinario._id;
    try {
        
        const remaAlmacenado = await rema.save()
        res.json(remaAlmacenado);
    } catch (error) {
        console.log(error)
    }
};

const obtenerRemas = async (req, res) =>{
    const remas = await Rema.find().where('veterinario')
    .equals(req.veterinario);

    res.json(remas)
};

const obtenerRema = async (req, res) => {

    const {id} = req.params;
    const rema = await Rema.findById(id);

    if (!rema){
        return res.status(404).json({msg: 'No Encontrado'})
        }

    if (rema.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg:'Accion no vàlida'})   
    }


    res.json(rema);
};

const actualizarRema = async (req, res) => {

    const {id} = req.params;
    const rema = await Rema.findById(id);

    if (!rema){
        return res.status(404).json({msg: 'No Encontrado'})
        }

    if (rema.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg:'Accion no vàlida'})   
    }

    
        //Actualizar paciente

    rema.tipo = req.body.tipo || rema.tipo;
    rema.cliente = req.body.cliente|| rema.cliente;
    rema.numeroOc = req.body.numeroOc || rema.numeroOc;
    rema.producto = req.body.producto|| rema.producto;
    rema.suma = req.body.suma || rema.suma;
    rema.numero1 = req.body.numero1 || rema.numero1.uno;
    rema.numero2 = req.body.numero2 || rema.numero2;
    try {
        const remaActualizado = await rema.save()
        res.json(remaActualizado)
    } catch (error) {
       console.log(error) 
    }
    
};

const eliminarRema = async (req, res) => {

    const {id} = req.params;
    const rema = await Rema.findById(id);

    if (!rema){
        return res.status(404).json({msg: 'No Encontrado'})
        }

    if (rema.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg:'Accion no vàlida'})   
    }


    try {
        await rema.deleteOne();
        res.json({msg:'Rema Eliminado'})
    } catch (error) {
        console.log(error)
    }
    
};






export {agregarRema,
    obtenerRemas,
    obtenerRema,
    actualizarRema,
    eliminarRema}