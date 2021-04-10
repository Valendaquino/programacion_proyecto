let producto = require('../routes/producto');
let controller = {
   index: function(req,res) {
      res.render('index')
      res.send('hola')
     }
}
module.exports = controller