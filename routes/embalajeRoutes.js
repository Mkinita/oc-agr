import  express  from "express";
const router = express.Router();
import {agregarEmbalaje,
    obtenerEmbalajes,
    obtenerEmbalaje,
    actualizarEmbalaje,
    eliminarEmbalaje} from '../controllers/embalajeControllers.js'
import checAuth from '../middleware/authMiddleware.js'

router.route('/')
.post(checAuth,agregarEmbalaje)
.get(checAuth, obtenerEmbalajes)

router
.route('/:id')
.get(checAuth, obtenerEmbalaje )
.put(checAuth, actualizarEmbalaje)
.delete(checAuth, eliminarEmbalaje)




export default router;