let express = require('express');
let router = express.Router();
let controller = require('../controllers/usersControllers')
let multer = require("multer")
let path = require("path")
/* GET users listing. */
router.get('/', controller.index);
router.get('/creaTuCuenta', controller.register);
router.get('/ingresa', controller.login);
router.get('/miPerfil', controller.perfil);
router.get('/editarPerfil/:id', controller.edit);
router.get('/editarPerfil/:id', controller.update);
module.exports = router;