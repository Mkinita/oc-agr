import Embalaje from "../models/Embalaje.js"


const agregarEmbalaje = async (req, res) =>{
    const embalaje = new Embalaje(req.body);
    embalaje.veterinario = req.veterinario._id;




    
    try {
        
        const embalajeAlmacenado = await embalaje.save()
        res.json(embalajeAlmacenado);
    } catch (error) {
        console.log(error)
    }
};

const obtenerEmbalajes = async (req, res) =>{
    const embalajes = await Embalaje.find().where('veterinario')
    .equals(req.veterinario);

    res.json(embalajes)
};

const obtenerEmbalaje = async (req, res) => {

    const {id} = req.params;
    const embalaje = await Embalaje.findById(id);

    if (!embalaje){
        return res.status(404).json({msg: 'No Encontrado'})
        }

    if (embalaje.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg:'Accion no vàlida'})   
    }


    res.json(embalaje);
};

const actualizarEmbalaje = async (req, res) => {

    const {id} = req.params;
    const embalaje = await Embalaje.findById(id);

    if (!embalaje){
        return res.status(404).json({msg: 'No Encontrado'})
        }

    if (embalaje.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg:'Accion no vàlida'})   
    }

    
        //Actualizar paciente

    embalaje.tipo = req.body.tipo || embalaje.tipo;
    embalaje.cliente = req.body.cliente|| embalaje.cliente;
    embalaje.numeroOc = req.body.numeroOc || embalaje.numeroOc;
    embalaje.producto = req.body.producto|| embalaje.producto;
    embalaje.suma = req.body.suma || embalaje.suma;
    embalaje.numero1 = req.body.numero1 || embalaje.numero1.uno;
    embalaje.numero2 = req.body.numero2 || embalaje.numero2;
    try {
        const embalajeActualizado = await embalaje.save()
        res.json(embalajeActualizado)
    } catch (error) {
       console.log(error) 
    }
    
};

const eliminarEmbalaje = async (req, res) => {

    const {id} = req.params;
    const embalaje = await Embalaje.findById(id);

    if (!embalaje){
        return res.status(404).json({msg: 'No Encontrado'})
        }

    if (embalaje.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg:'Accion no vàlida'})   
    }


    try {
        await embalaje.deleteOne();
        res.json({msg:'Col Eliminado'})
    } catch (error) {
        console.log(error)
    }
    
};






export {agregarEmbalaje,
    obtenerEmbalajes,
    obtenerEmbalaje,
    actualizarEmbalaje,
    eliminarEmbalaje}