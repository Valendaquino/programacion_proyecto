const db = require('../database/models');
const product = db.Product;
const users= db.User;
const comment = db.Comment;
const type = db.Type_product;

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
        //foto de perfil
        else if (req.body.password == ""){ 
            errors.register = "Password no puede estar vacia"
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
             if(user !== null){ 
                 errors.register = "Email ya existe"
                 res.locals.errors = errors

                 return res.render('register')
             }  else if(req.body.usuario == username){ //se puede?
                errors.register = "Ya existe ese nombre de usuario"
                res.locals.errors = errors

                return res.render('register')
            }
             
             else if(req.body.password != req.body.repassword ){
                 errors.register = "Los password no coinciden"
                 res.locals.errors = errors

                 return res.render('register')
             } else {
                 let user = {
                     name_users : req.body.nombre,
                     surname: req.body.apellido,
                     birth_date: req.body.nacimiento, 
                     email: req.body.email,
                     username: req.body.usuario,
                     profile_photo: req.file.filename,
                     password_: bcrypt.hashSync(req.body.password, 10),
                     confirm_password: bcrypt.hashSync(req.body.repassword, 10)
                     // pasar updated y created at.
                 }
                 users.create(user)
                     .then( user => {
                         return res.redirect('/ingresa')
                     })
                     .catch( err => console.log(err))
             }
         })
         .catch( err =>res.send(err))
    }

    },
    login: function(req,res){
       res.render('login')
       if(req.session.user != undefined){
        return res.redirect('/ingresa')
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
    errors.login = "el email es incorrecto";
    res.locals.errors = errors
    return res.render('login')
}
else if(bcrypt.compareSync(req.body.password,user.password_) == false){
    errors.login = "la contrasenia es incorrecta"
    res.locals.errors = errors
    return res.render('login')
}
else{
    req.session.user = user
    if(req.body.rememberme != undefined){
        res.cookie ('userID', user.id, {maxAge: 1000 * 60 * 5});
    }
}
return res.redirect('/');
}) 
.catch(err=> console.log(err))
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
    },
    logout:(req,res)=>{
        req.session.destroy()
        res.clearCookie('userId')
        res.redirect('/')
    }

}

module.exports= controller;