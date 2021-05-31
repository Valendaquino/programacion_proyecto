let express = require('express');
let router = express.Router();
let controller = require('../controllers/productoControllers')
/* GET users listing. */

router.get('/', controller.index);
router.get('/agregarProducto', controller.agregarproducto);
router.post('/agregarProducto', controller.almacenar);
router.get('/producto/:id', controller.producto);
router.get('/search', controller.search);
router.get('/borrar/:id', controller.borrar);
router.get('/editProduct/:id', controller.edit)
router.post('/editProduct/:id', controller.update)
//router.get()
module.exports = router;

