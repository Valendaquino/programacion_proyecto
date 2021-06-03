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
        description_: {
            type: dataTypes.STRING,
            allowNull: false
        },
        url_image:{
            type: dataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
            //foreing key 
            allowNull: false
        },
        type_id:{
        type: dataTypes.INTEGER,
         allowNull: false
        //foreing key
        },
        updated_at:{
            type: dataTypes.DATE
        }

    };
    let config = {
        table: "products",
        timestamps: false,
        underscored: true
    }

    const Product = sequelize.define(alias, cols, config)
    return Product;
}
