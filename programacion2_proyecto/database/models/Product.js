module.exports = (sequelize, dataTypes)=>{

    let alias = 'Product';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
       name: {
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
            //foreing key 
            allowNull: false
        },

    //    product_type:{
    //       type: dataTypes.INTEGER,
    //     allowNull: false
    //     //foreing key
      //}

    };
    let config = {
        table: "Products",
        timestamps: false,
        underscored: true
    }

    const Product = sequelize.define(alias, cols, config)
    return Product;
}
