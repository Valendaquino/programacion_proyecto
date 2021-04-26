let express = require('express');
let router = express.Router();
let controller = require('../controllers/productoControllers')
/* GET users listing. */

router.get('/creaTuCuenta', controller.register);

module.exports = router;