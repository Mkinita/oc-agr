import express from 'express';
const router = express.Router();
import {
    registrar,
    perfil, 
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    actualizarPerfil
}from '../controllers/veterinarioControllers.js'
import checAuth from '../middleware/authMiddleware.js'


// plubico
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);



//privado
router.get('/perfil',checAuth, perfil);
router.put('/perfil/:id',checAuth,actualizarPerfil)




export default router;