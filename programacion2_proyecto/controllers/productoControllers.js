let producto = require('../data/productoshome');
let controller = {
   index: function(req,res) {
      res.render('index', {producto:producto})

     },
     register: function(req,res){
         res.render('register')
     },
     login: function(req,res){
        res.render('login')
    },
    perfil: function(req,res){
        res.render('profile')
    },
    editarperfil: function(req,res){
        res.render('profile-edit')
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
               console.log(resultado);
            }
        }
        console.log(resultado);
        res.render('product', {producto:resultado})
    },
    search: function(req,res){
        res.render('search-results')
    }
}
module.exports = controller