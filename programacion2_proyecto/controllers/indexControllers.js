const db = require('../database/models');
const product = db.Product;
const user= db.User;
const comment = db.Comment;
const type = db.Type_product;

const op = db.Sequelize.Op;

let controller = {
   index: function(req,res) {
       product.findAll({
       order:[[`publish_date`,`DESC`]],//preguntar si esto esá bien
       limit:8,
      })
      .then((resultados)=> res.render(`index`,{resultados}))
     .catch((err)=>{
         res.send(err)
         console.log(err);
        })

     }
}
module.exports = controller;