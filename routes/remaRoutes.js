import  express  from "express";
const router = express.Router();
import {agregarRema,
    obtenerRemas,
    obtenerRema,
    actualizarRema,
    eliminarRema} from '../controllers/remaControllers.js'
import checAuth from '../middleware/authMiddleware.js'

router.route('/')
.post(checAuth,agregarRema)
.get(checAuth, obtenerRemas)

router
.route('/:id')
.get(checAuth, obtenerRema )
.put(checAuth, actualizarRema)
.delete(checAuth, eliminarRema)




export default router;