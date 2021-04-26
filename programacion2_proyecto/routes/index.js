let express = require('express');
let router = express.Router();
let controller = require('../controllers/indexControllers')
/* GET users listing. */

router.get('/', controller.index);
module.exports = router;