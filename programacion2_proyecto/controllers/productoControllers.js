const db = require('../database/models');
const product = db.Product;
const user= db.User;
const comment = db.Comment;
const genre = db.Genre;
const op = db.Sequelize.Op;

let controller = {
    index: function(req,res) {
        res.render('index', {'producto':producto})
       },
    
    // agregarproducto: function(req,res){
    //     res.render('product-add')
    // },
    add:function(req,res){
        genre.findAll()
        .then (function(genres){
            return res.render('product-add', {genres})
        })
        .catch(err => console.log(err))
        
    },
    almacenar: function(req,res){
       
        let errors = {};
        //chequear los campos obligatorios
       if(req.body.name== ""){ 
            errors.register = "El nombre no puede estar vacio"
            res.locals.errors = errors
            return res.render('product-add')

        }else if (req.body.description== ""){
            errors.register = "Debes escribir una descripción"
            res.locals.errors = errors
            return res.render('product-add')
             } else {
                let product = {
                    name_: req.body.name,
                    publish_date: req.body.publish_date,
                    description: req.body.description,
                    url_image: req.body.filename,
                    genre_id:req.body.genre_id
                   
                } 
                db.Product.create(product)
        
                .then(() => res.redirect('/product'))
                .catch(err => console.log(err))
                }
       
    },

   
    producto: function(req,res){
       
    let primaryKey= req.params.id
        product.findByPk(primaryKey, {
            include: [ {association:'user'}]
            
        })
        .then((resultados)=> 
        //res.send(resultados)
       res.render(`product`,{resultados})
        )
        .catch((err)=>{
            res.send(err)
            console.log(err);
           })
    },
    search: function(req,res){
        let serchData= req.query.search
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
            include: [{association:'genre'}, {association:'user'}]
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