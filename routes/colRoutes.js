import  express  from "express";
const router = express.Router();
import {agregarCol,
    obtenerCols,
    obtenerCol,
    actualizarCol,
    eliminarCol} from '../controllers/colControllers.js'
import checAuth from '../middleware/authMiddleware.js'

router.route('/')
.post(checAuth,agregarCol)
.get(checAuth, obtenerCols)

router
.route('/:id')
.get(checAuth, obtenerCol )
.put(checAuth, actualizarCol)
.delete(checAuth, eliminarCol)




export default router;