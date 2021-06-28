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

    add:function(req,res){
        genre.findAll()
        .then (function(genres){
            return res.render('product-add', {genres})
        })
        .catch(err => console.log(err))
        
    },
    almacenar: function(req,res){
        console.log(req.body);
        let errors = {};
       
        //chequear los campos obligatorios
       if(req.body.name== ""){ 
            errors.add = "El nombre no puede estar vacio"
            res.locals.errors = errors
        
                genre.findAll()
                .then (function(genres){
                    return res.render('product-add', {genres})
                })
               
           
            .catch(err => console.log(err))

        }else if (req.body.description== ""){
            errors.add = "Debes escribir una descripción"
            res.locals.errors = errors
            genre.findAll()
            .then (function(genres){
                return res.render('product-add', {genres})
            })
           
            
             } else if (req.file== undefined){
                errors.add = "Debes agregar una imagen"
                res.locals.errors = errors
                genre.findAll()
                .then (function(genres){
                    return res.render('product-add', {genres})
                })
               
                
                 } 
             else {
                console.log(req.file.filename);
                let product = {
                    name_: req.body.name,
                    description: req.body.description,
                    url_image: req.file.filename,
                    genre_id: req.body.genre_id,
                    user_id: req.session.user.id
                   
                } 
                Product.create(product)
        
                .then(() => res.redirect('/'))
                .catch(err => console.log(err))
                }
       
    },

    producto: function(req,res){
        let primaryKey= req.params.id
        
            product.findByPk(primaryKey, {
                include: [ {association:'user'},{association:'genre'},
            ]})
           
            .then((producto)=> 
          
                comment.findAll({
                   where: {
                        product_id: producto.id
                    },
                    include:[{association:'user'},
                     ],
                    order:[['updated_at','DESC']] ,
                 })
                
                .then ((comments)=>{
                   
                //res.send({producto, comments})
                 return res.render('product', {producto, comments})
               }
                
               ) 
                .catch((err)=>{
                    res.send(err)
                    console.log(err);
                   })
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
                    user_id: req.session.user.id,
                    product_id: req.params.id
                }
                db.Comment.create(comment)
    
                .then(() => res.redirect(`/producto/${req.params.id}`))
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
    //El borrar producto lo ubicamos dentro del editar perfil ya que queda más prolijo y nos aseguramos que unicamente quien lo creó podría borrarlo.
    borrar: (req, res)=>{
        let primaryKey = req.params.id;
        product.destroy({
            where: {
                id: primaryKey
            }
        })
        .then(() => res.redirect('/'))
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
   update: (req, res)=>{   
    let primaryKey = req.params.id;
     product.findByPk(primaryKey)
     .then((producto)=>{
         if(req.session.user == undefined){
             res.redirect("/")
         }else {
             if(req.file == undefined){
            let productoActualizar = { name_: req.body.name_ ,
                description: req.body.description
                
              }
                console.log(productoActualizar);
                product.update(
                productoActualizar, 
                {
                    where: {
                        id: primaryKey
                    }
                }
                )
                .then(()=> res.redirect(`/producto/${producto.id}`))
                .catch(err => console.log(err))
                        }else{
                            let productoActualizar = { name_: req.body.name_ ,
                                description: req.body.description,
                                url_image: req.file.filename
                              }
                                console.log(productoActualizar);
                                product.update(
                                productoActualizar, 
                                {
                                    where: {
                                        id: primaryKey
                                    }
                                }
                                )
                                .then(()=> res.redirect(`/producto/${producto.id}`))
                                .catch(err => console.log(err))
                        }}
                    })
    
     
},

  
}
module.exports = controller