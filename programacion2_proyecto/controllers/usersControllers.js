let producto = require('../data/productoshome');
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