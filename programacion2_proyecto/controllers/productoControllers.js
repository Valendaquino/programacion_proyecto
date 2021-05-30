const db = require('../database/models');
const product = db.Product;
const user= db.User;
const comment = db.Comment;
const type = db.Type_product;

const op = db.Sequelize.Op;

let controller = {
    index: function(req,res) {
        res.render('index', {'producto':producto})
  
       },
    
    agregarproducto: function(req,res){
        return res.render('product-add')
    },
    almacenar: function(req,res){
        type.findAll()
        .then(function (type_product){
            return res.render('product-add', {type_product})
        })
        .catch(err => console.log(err))
        let product = {
            name_: req.body.name,
            publish_date: req.body.date,
            description: req.body.description,
            url_image: req.body.length.img,
            //user_id:req.body.user
            type_id: req.body.type_id
            }

        db.Product.create(product)
    
            .then(() => res.redirect('/')) //la ruta esta bien?
            .catch(err => console.log(err))  
    },
    //borramos un this.producto(no sabiamos xa que servia)
    producto: function(req,res){
       
    let primaryKey= req.params.id
        product.findByPk(primaryKey)
        .then((resultados)=> res.render(`product`,{resultados}))
        .catch((err)=>`Error:${err}`)
        
               
            
        
        
        
    },
    search: function(req,res){
        res.render('search-results', {'producto' :producto})
    }
}
module.exports = controller