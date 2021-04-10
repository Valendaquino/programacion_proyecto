let express = require('express');
let router = express.Router();
let controller = require('../controllers/productoControllers')
/* GET users listing. */
router.get('/', controller.index);
router.get('/creaTuCuenta', controller.register);
router.get('/ingresa', controller.login);
router.get('/miPerfil', controller.perfil)
//router.get()
//router.get()
module.exports = router;