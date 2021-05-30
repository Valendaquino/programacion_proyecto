const db = require('../database/models');
const product = db.product;
const user= db.user;
const comment = db.comment;
const type = db.Type_product;

const op = db.Sequelize.Op;

let controller = {
    index: function(req,res) {
        res.render('index', {'producto':producto})
  
       },
    
    agregarproducto: function(req,res){
        res.render('product-add')
    },
    //borramos un this.producto(no sabiamos xa que servia)
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