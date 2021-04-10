let express = require('express');
let router = express.Router();
let controller = require('../controllers/productoControllers')
/* GET users listing. */
router.get('/', controller.index);
// router.get();

// router.get();
module.exports = router;