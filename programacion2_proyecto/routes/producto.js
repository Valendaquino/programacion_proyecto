let express = require('express');
let router = express.Router();
let controller = require('../controllers/productoControllers')
let multer = require("multer")
let path = require("path")
/* GET users listing. */

var storage = multer.diskStorage({
	destination: function(req, file, cb){
    		cb(null, 'public/images/products');
	},
	filename: function(req, file, cb){
    		cb(null,  Date.now() + path.extname(file.originalname))
	}
});
var upload = multer({ storage: storage });

router.get('/', controller.index);
router.get('/agregarProducto', controller.add);
router.post('/agregarProducto', upload.single('url_image') ,controller.almacenar);
router.get('/producto/:id', controller.producto);
router.get('/search', controller.search);
router.get('/borrar/:id', controller.borrar);
router.get('/editProduct/:id', controller.edit)
router.post('/editProduct/:id', controller.update)


module.exports = router;

