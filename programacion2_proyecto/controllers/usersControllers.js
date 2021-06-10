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
    register: function(req,res){
        res.render('register')
    },
    login: function(req,res){
       res.render('login')
    },
    processLogin: function(req,res){
    res.send('hola')
 
    },


   perfil: function(req,res){
       res.render('profile', {'producto':producto})
   },
   edit: function(req,res){
        let primaryKey=req.params.id
        product.findByPk(primaryKey)
        .then(resultados => res.render('profile-edit', { resultados }))
        .catch(err => console.log(err))
   },
   update:function(req,res){
        let primaryKey=req.params.id
            let userUpdate=req.body
                user.update(
                    userUpdate,
                    {where:{
                        id: primaryKey
                    } } )
                .then(()=> res.redirect('/users'))
                .catch(err => console.log(err))
    }

}

module.exports= controller;