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
        res.render('product-add')
    },
    //borramos un this.producto(no sabiamos xa que servia)
    producto: function(req,res){
       
    let primaryKey= req.params.id
        product.findByPk(primaryKey)
        .then((resultados)=> res.render(`product`,{resultados}))
        .catch((err)=>`Error:${err}`)
        
        
    },
    search: function(req,res){
        let serchData= req.query.search.
        product.findAll({
            where:[{name_: {[op.like]:`${serchData}`}}],
         // que onda esto ?   where:[{type_id: {[op.like]:`${serchData}`}}] 
        })
        .then((resultados)=> res.render(`search-results`,{resultados}))
        .catch((err)=>`Error:${err}`)
    }
}
module.exports = controller