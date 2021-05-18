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
  
       },
    
    agregarproducto: function(req,res){
        res.render('product-add')
    },
    producto: function(req,res){
       
       
        let ids = req.params.id
        
        let resultado = {}
        for(let i=0;i<producto.length; i++){
            if(producto[i].id==ids){
               resultado=producto[i];
               
            }
        }
        
        res.render('product', {'producto':resultado})
    },
    search: function(req,res){
        res.render('search-results', {'producto' :producto})
    }
}
module.exports = controller