let producto = require('../data/productoshome');
let controller = {
   index: function(req,res) {
      res.render('index', {'producto':producto})

     }
}
module.exports = controller;