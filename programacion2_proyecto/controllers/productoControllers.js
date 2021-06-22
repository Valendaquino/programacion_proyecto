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
        console.log(req);
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
                console.log(req.file.filename);
                let product = {
                    name_: req.body.name,
                    description: req.body.description,
                    url_image: req.file.filename,
                    genre_id: req.body.genre_id,
                    user_id: res.locals.user.id
                   
                } 
                db.Product.create(product)
        
                .then(() => res.redirect('/'))
                .catch(err => console.log(err))
                }
       
    },

   
    producto: function(req,res){
       
    let primaryKey= req.params.id
        product.findByPk(primaryKey, {
            include: [ {association:'user'}, 
                        {association:'comments', 
                            include:[{association:'user'}],
               //             order:[['updated_at','DESC']]  No anda
                    }]
        })
        .then((producto)=> 
            //res.send(producto)
            res.render(`product`,{producto})
        )
        .catch((err)=>{
            res.send(err)
            console.log(err);
           })
    },
    comments: function(req,res){
      
        if(req.session.user == undefined){
            return res.redirect('/ingresa')
        } else {
         
            let comment={
                text_ : req.body.comment,
                user_id: res.locals.user.id,
                product_id: 4
            }
            db.Comment.create(comment)
            .then(() => res.redirect('/'))
            .catch(err => console.log(err))
        }
    },
    search: function(req,res){
        let searchData= req.query.search
        product.findAll({
            include: [ {association:'user'}, {association:'genre'}],
            where:{ [op.or]:[
                {description: {[op.like]:`%${searchData}%`}},
                {name_: {[op.like]:`%${searchData}%`}}
             ]
             }
           
        })
        
        .then((resultados)=>res.render(`search-results`,{resultados}))
        .catch((err)=>`Error:${err}`)
    
    },
    borrar: (req, res)=>{
        let primaryKey = req.params.id;
        product.destroy({
            where: {
                id: primaryKey
            }
        })
        .then(()=> res.redirect('/'))
        .catch(err=> console.log(err))
    },
    edit:  function(req,res){
        let primaryKey=req.params.id
        product.findByPk(primaryKey, {
            include: [{association:'genre'}, {association:'user'}]
        })
        .then(resultados => 
            res.render('product-edit', { resultados }))
        .catch(err => console.log(err))
    
   }, 

    update: function(req,res){
        let primaryKey=req.params.id
        let productUpdate= req.body
        let img=req.file.filename
            product.update(
                productUpdate,
                {where:{
                    id: primaryKey
                } }
                
                )
                //funciona solo li le enviamos una img pero no la cambia en la base            
            .then(()=> 
                    product.update(
                        img,
                        {where:{
                            id: primaryKey
                        } } 
                    )
                .then(()=>res.redirect('/')))
                .catch(err => console.log(err))
            .catch(err => console.log(err))
    }
}
module.exports = controller