const db = require('../database/models');
const product = db.Product;
const user= db.User;
const comment = db.Comment;
const type = db.Type_product;

const op = db.Sequelize.Op;

let controller = {
    index: function(req,res) {
        res.render('index', {'producto':producto})
  // donde hacemos lo de hacer click en home y q me devuelva ese prod?
       },
    
    agregarproducto: function(req,res){
        res.render('product-add')
    },
    add:function(req,res){
        type.findAll()
        .then (function(type_product){
            return res.render('product-add', {type_product})
        })
        .catch(err => console.log(err))
        
    },
    almacenar:function(req,res){
        let product = {
            name_: req.body.name,
            publish_date: req.body.publish_date,
            description: req.body.description,
            url_image: req.body.img,
            type_id:req.body.type_id
            //hay q poner el update y user id?
            //como incluyo acá la association
        } 

        db.Product.create(product)
        
            .then(() => res.redirect('/product'))
            .catch(err => console.log(err))
    },

   
    producto: function(req,res){
       
    let primaryKey= req.params.id
        product.findByPk(primaryKey, {
            include: [{association:'type_product'}, {association:'user'}, {association:'comments'}]//está bien comments?
            
        })
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
    },
    borrar: (req, res)=>{
        let primaryKey = req.params.id;
        product.destroy({
            where: {
                id: primaryKey
            }
        })
        .then(()=> res.redirect('/product'))
        .catch(err=> console.log(err))
    },
    edit: function(req,res){
        let primaryKey=req.params.id
        product.findByPk(primaryKey, {
            include: [{association:'type_product'}, {association:'user'}]
        })
        .then(resultados => res.render('product-edit', { resultados }))
        .catch(err => console.log(err))
    },
    update: function(req,res){
        let primaryKey=req.params.id
        let productUpdate=req.body
            product.update(
                productUpdate,
                {where:{
                    id: primaryKey
                } } )
            .then(()=> res.redirect('/product'))
            .catch(err => console.log(err))
    }
}
module.exports = controller