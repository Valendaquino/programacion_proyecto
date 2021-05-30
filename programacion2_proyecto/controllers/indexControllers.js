const db = require('../database/models');
const product = db.Product;
const user= db.User;
const comment = db.comment;
const type = db.type_product;

const op = db.Sequelize.Op;

let controller = {
   index: function(req,res) {
       product.findAll({
       where:[`date`],
       order:[[`date`,`DESC`],],
       limit:8,
      })
      .then((resultados)=> res.render(`index`,{resultados}))
     .catch((err)=>`Error:${err}`)

     }
}
module.exports = controller;