module.exports = (sequelize, dataTypes)=>{

    let alias = 'Producto';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
       nombre: {
            type: dataTypes.STRING,
            allowNull: false

        },
        
        user_id: {
            type: dataTypes.INTEGER,
            //foreing key 
            allowNull: false
        },
        create_date: {
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
        product_type:{
            type: dataTypes.INTEGER,
            allowNull: false
            //foreing key
        }

    };
    let config = {
        table: "Producto",
        timestamps: false,
        underscored: true
    }

    const Producto = sequelize.define(alias, cols, config)
    return Producto;
}
