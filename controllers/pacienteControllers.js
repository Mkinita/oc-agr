import Paciente from "../models/Paciente.js";

const agregarPaciente = async (req, res) =>{
    const paciente = new Paciente(req.body);
    paciente.veterinario = req.veterinario._id;
    
    try {
        
        const pacienteAlmacenado = await paciente.save()
        res.json(pacienteAlmacenado);
    } catch (error) {
        console.log(error)
    }
};
const obtenerPacientes = async (req, res) =>{
    const pacientes = await Paciente.find().where('veterinario')
    .equals(req.veterinario);

    res.json(pacientes)
};

const obtenerPaciente = async (req, res) => {

    const {id} = req.params;
    const paciente = await Paciente.findById(id);

    if (!paciente){
        return res.status(404).json({msg: 'No Encontrado'})
        }

    if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg:'Accion no vàlida'})   
    }


    res.json(paciente);
};

const actualizarPaciente = async (req, res) => {

    const {id} = req.params;
    const paciente = await Paciente.findById(id);

    if (!paciente){
        return res.status(404).json({msg: 'No Encontrado'})
        }

    if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg:'Accion no vàlida'})   
    }

    
        //Actualizar paciente

    paciente.tipo = req.body.tipo || paciente.tipo;
    paciente.cliente = req.body.cliente|| paciente.cliente;
    paciente.numeroOc = req.body.numeroOc || paciente.numeroOc;
    paciente.producto = req.body.producto|| paciente.producto;
    paciente.suma = req.body.suma || paciente.suma;
    paciente.numero1 = req.body.numero1 || paciente.numero1.uno;
    paciente.numero2 = req.body.numero2 || paciente.numero2;
    try {
        const pacienteActualizado = await paciente.save()
        res.json(pacienteActualizado)
    } catch (error) {
       console.log(error) 
    }
    
};

const eliminarPaciente = async (req, res) => {

    const {id} = req.params;
    const paciente = await Paciente.findById(id);

    if (!paciente){
        return res.status(404).json({msg: 'No Encontrado'})
        }

    if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg:'Accion no vàlida'})   
    }


    try {
        await paciente.deleteOne();
        res.json({msg:'Paciente Eliminado'})
    } catch (error) {
        console.log(error)
    }
    
};



const buscaNombrePaciente = async (req,res)=> {
    const {texto} = req.params
    const pacientes = await Paciente.find().where({nombre: new RegExp('^'+texto+$,"i")})
    res.json(pacientes);
}

export {agregarPaciente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente,
    buscaNombrePaciente}


//1g9g0ut5u83sqqao16co