const db = require('../database/models');
const product = db.Product;
const users= db.User;
const comment = db.Comment;
const genre= db.Genre;
const bcrypt = require('bcryptjs')
const op = db.Sequelize.Op;

let controller = {
    index: function(req,res) {
        res.render('index', {'producto':producto})
  
       }, 
    register: function(req,res){
        if(req.session.user != undefined){
            return res.redirect('/creatuCuenta')
        } else {
            return res.render('register')
        }

    },
    store: function(req,res){
        console.log(req.body)
        let errors = {};
        //chequear los campos obligatorios
       if(req.body.nombre == ""){ 
            errors.register = "El nombre no puede estar vacio"
            res.locals.errors = errors
            return res.render('register')

        }else if (req.body.apellido == ""){
            errors.register = "El apellido no puede estar vacio"
            res.locals.errors = errors
            return res.render('register')

        } else if (req.body.nacimiento == ""){
            errors.register = "La fecha de nacimiento no puede estar vacio"
            res.locals.errors = errors
            return res.render('register')

        }
        else if (req.body.email == ""){
            errors.register = "El e-mail no puede estar vacio"
            res.locals.errors = errors
            return res.render('register')
        }
        else if (req.body.username == ""){
            errors.register = "El nombre de usuario no puede estar vacio"
            res.locals.errors = errors
            return res.render('register')

        }
        
       
        else if (req.body.password == ""){ 
            errors.register = "Password no puede estar vacia"
            res.locals.errors = errors
            return res.render('register')
        } 
        else if (req.body.password.length <4){ 
            errors.register = "Password debe tener mas de 3 caracteres"
            res.locals.errors = errors
            return res.render('register')
        } 
        else if(req.body.repassword == ""){
            errors.register = "Re escribir password no puede estar vacio"
            res.locals.errors = errors
            return res.render('register')
        }  
        else {
        users.findOne(
            {where: [{ email : req.body.email}]
        })
         .then( user => {
             console.log('busca ek usuario');
             if(user != null){ 
                 console.log('usuario existe');
                 errors.register = "Email ya existe"
                 res.locals.errors = errors

                 return res.render('register')
             } 
            //  else if(req.body.usuario == user.username){ 
            //     console.log('username existe');
            //     errors.register = "Ya existe ese nombre de usuario"
            //     res.locals.errors = errors

            //     return res.render('register')
            // }
            else if(req.body.password != req.body.repassword ){
                 console.log('contraseña existe');
                 errors.register = "Los password no coinciden"
                 res.locals.errors = errors

                 return res.render('register')
             } else {
                 console.log('Crea el usuario');
                 let user = {
                     name_users : req.body.nombre,
                     surname: req.body.apellido,
                     birth_date: req.body.nacimiento, 
                     email: req.body.email,
                     username: req.body.usuario,
                     profile_photo: "default.png",
                     password_: bcrypt.hashSync(req.body.password, 10),
                     confirm_password: bcrypt.hashSync(req.body.repassword, 10)   
                 }
                 users.create(user)
                     .then( user => {
                         return res.redirect('/ingresa')
                     })
                     .catch( err => console.log(err))
             }
             console.log('llego al final');
         })
         .catch( err =>{
             console.log(err);
             res.send(err)
            })
    }

    },
    login: function(req,res){
        res.render('login')
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('login')
        }
    },
    processLogin: function(req,res){
        let errors = {}
        db.User.findOne({
            where: [{email: req.body.email}]
        })
        .then(user => {
        if(user == null){
            errors.login = "El email o la contraseña son incorrectas";
            res.locals.errors = errors
            return res.render('login')
        }
        else if(bcrypt.compareSync(req.body.password,user.password_) == false){
            errors.login = "El email o la contraseña son incorrectas"
            res.locals.errors = errors
            return res.render('login')
        }
        else{
            req.session.user = user
            if(req.body.rememberme != undefined){
                res.cookie ('userID', user.id, {maxAge: 1000 * 60 * 10});
            }
        }
        return res.redirect('/');
        }) 
        .catch(err=> console.log(err))
            },


   perfil: function(req,res){
      
        let user_id = req.params.id
           product.findAll({
            where:[{user_id: {[op.like]:`${user_id}$`}}]
            })
        .then((producto)=> 
        
          res.render(`profile`,{producto})
        )
        .catch((err)=>{
            res.send(err)
            console.log(err);
        })
        
    },
    otherProfile: function(req,res){
        let user_id = req.params.id
        product.findAll({
            include: [ {association:'user'}, {association:'genre'}, ],
            where:[ 
           {user_id: {[op.like]:`%${user_id}%`} }

           
          
        ]})
        
        .then(product=>res.render('other-profiles', { product }))
        .catch(err => console.log(err))
    },
   edit: function(req,res){
        let primaryKey=req.params.id
        users.findByPk(primaryKey)
        .then(resultados =>

            res.render('profile-edit', { resultados })
             )
        .catch(err => console.log(err))
   },
   update:function(req,res){
        let primaryKey=req.params.id
        let userUpdate=req.body
        console.log(userUpdate);
                users.update(
                    userUpdate,
                    {where:{
                        id: primaryKey
                    } } )
                    //no cambia la img
                .then(()=> res.redirect('/'))
                .catch(err => console.log(err))
    },
    logout:(req,res)=>{
        req.session.destroy()
        res.clearCookie('userID')
        res.redirect('/ingresa')
    }

}

module.exports= controller;