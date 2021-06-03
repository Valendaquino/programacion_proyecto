const { FOREIGNKEYS } = require("sequelize/types/lib/query-types");

module.exports = (sequelize, dataTypes)=>{

    let alias = 'Product';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
       name_: {
            type: dataTypes.STRING,
            allowNull: false

        },
        publish_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        img_url:{
            type: dataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        product_type:{
        type: dataTypes.INTEGER,
         allowNull: false
 }

    };
    let config = {
        table: "Products",
        timestamps: false,
        underscored: true
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = (models)=>{
        Product.belongsTo(models.User,{
            as:'user',
            foreingKey:'user_id'
        });
        Product.belongsTo(models.Type_product,{
            as:'type_product',
            foreingKey:'type_id'

        });
        Product.hasMany(models.Comment, {
            as:'comment',
            foreingKey: '_id'
        })
    }


    return Product;
}
