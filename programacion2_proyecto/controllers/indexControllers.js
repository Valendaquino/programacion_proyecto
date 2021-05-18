const db = require('../database/models');
const product = db.Producto;
const user= db.Usuario;
const comment = db.Comentario;
const type = db.Tipo_producto;

const op = db.Sequelize.Op;

let producto = require('../data/productoshome');
let controller = {
   index: function(req,res) {
      res.render('index', {'producto':producto})

     }
}
module.exports = controller;