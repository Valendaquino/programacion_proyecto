let express = require('express');
let router = express.Router();
let controller = require('../controllers/usersControllers')
let multer = require("multer")
let path = require("path")

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
    		cb(null, 'public/images/users');
	},
	filename: (req, file, cb) => {
    		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
});
var upload = multer({ storage: storage });
/* GET users listing. */
router.get('/', controller.index);
router.get('/creaTuCuenta', controller.register);
router.post('/creaTuCuenta', upload.single('img'), controller.store);
router.get('/ingresa', controller.login);
router.post('/ingresa', controller.processLogin);
router.get('/miPerfil', controller.perfil);
router.get('/editarPerfil/:id', controller.edit);
router.post('/editarPerfil/:id', controller.update);
router.post('/logout',controller.logout);
module.exports = router;