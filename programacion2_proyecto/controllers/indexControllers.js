const db = require('../database/models');
const product = db.Product;
const user= db.User;
const comment = db.Comment;
const genre= db.Genre;

const op = db.Sequelize.Op;

let controller = {
   index: function(req,res) {
       product.findAll({
       include: [ {association:'user'}, {association:'genre'}],
       order:[[`created_at`,`DESC`]]
       
      })
      .then(resultados=> res.render('index',{resultados}))
      .catch(err=> `Error: ${err}`)
      } 
}
module.exports = controller;