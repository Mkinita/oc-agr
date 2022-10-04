import  express  from "express";
const router = express.Router();
import {agregarPaciente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente,
    buscaNombrePaciente
} from '../controllers/pacienteControllers.js'
import checAuth from '../middleware/authMiddleware.js'

router.route('/')
.post(checAuth,agregarPaciente)
.get(checAuth, obtenerPacientes)

router
.route('/:id')
.get(checAuth, obtenerPaciente )
.put(checAuth, actualizarPaciente)
.delete(checAuth, eliminarPaciente)


router
.route('/:id')
.get(buscaNombrePaciente )



export default router;