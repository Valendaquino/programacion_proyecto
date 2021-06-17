
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
        url_image:{
            type: dataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        genre_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
      

    };
    let config = {
        tableName: "products",
        timestamps:false,
        underscored: true
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = (models)=>{
        Product.belongsTo(models.User,{
            as:'user',
            foreingKey:'user_id'
        });
        Product.belongsTo(models.Genre,{
            as:'genre',
            foreingKey:'genre_id'

        });
        
        Product.hasMany(models.Comment, {
            as:'comments',
            foreingKey: 'product_id'
        })
    }


    return Product;
}
