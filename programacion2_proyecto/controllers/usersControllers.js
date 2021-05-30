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
    register: function(req,res){
        res.render('register')
    },
    login: function(req,res){
       res.render('login')
   },
   perfil: function(req,res){
       res.render('profile', {'producto':producto})
   },
   editarperfil: function(req,res){
       res.render('profile-edit')
   }

}

module.exports= controller;