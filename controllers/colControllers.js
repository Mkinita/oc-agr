import Col from "../models/Col.js"


const agregarCol = async (req, res) =>{
    const col = new Col(req.body);
    col.veterinario = req.veterinario._id;
    try {
        
        const colAlmacenado = await col.save()
        res.json(colAlmacenado);
    } catch (error) {
        console.log(error)
    }
};

const obtenerCols = async (req, res) =>{
    const cols = await Col.find().where('veterinario')
    .equals(req.veterinario);

    res.json(cols)
};

const obtenerCol = async (req, res) => {

    const {id} = req.params;
    const col = await Col.findById(id);

    if (!col){
        return res.status(404).json({msg: 'No Encontrado'})
        }

    if (col.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg:'Accion no vàlida'})   
    }


    res.json(col);
};

const actualizarCol = async (req, res) => {

    const {id} = req.params;
    const col = await Col.findById(id);

    if (!col){
        return res.status(404).json({msg: 'No Encontrado'})
        }

    if (col.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg:'Accion no vàlida'})   
    }

    
        //Actualizar paciente

    col.tipo = req.body.tipo || col.tipo;
    col.cliente = req.body.cliente|| col.cliente;
    col.numeroOc = req.body.numeroOc || col.numeroOc;
    col.producto = req.body.producto|| col.producto;
    col.suma = req.body.suma || col.suma;
    col.numero1 = req.body.numero1 || col.numero1.uno;
    col.numero2 = req.body.numero2 || col.numero2;
    try {
        const colActualizado = await col.save()
        res.json(colActualizado)
    } catch (error) {
       console.log(error) 
    }
    
};

const eliminarCol = async (req, res) => {

    const {id} = req.params;
    const col = await Col.findById(id);

    if (!col){
        return res.status(404).json({msg: 'No Encontrado'})
        }

    if (col.veterinario._id.toString() !== req.veterinario._id.toString()){
        return res.json({msg:'Accion no vàlida'})   
    }


    try {
        await col.deleteOne();
        res.json({msg:'Col Eliminado'})
    } catch (error) {
        console.log(error)
    }
    
};






export {agregarCol,
    obtenerCols,
    obtenerCol,
    actualizarCol,
    eliminarCol}