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
       order:[[`publish_date`,`DESC`]],
       limit:8
      })
      .then((resultados)=>
       //res.send(resultados)
        res.render(`index`,{resultados})
      )
      .catch((err)=>{
         res.send(err)
         console.log(err);
        })

     }
}
module.exports = controller;