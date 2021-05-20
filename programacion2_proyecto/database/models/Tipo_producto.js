module.exports = (sequelize, dataTypes)=>{

    let alias = 'Type_product';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
       tipo_producto: {
            type: dataTypes.STRING,
            allowNull: false

        }

    };
    let config = {
        table: "types_products",
        timestamps: false,
        underscored: true
    }

    const Type_product = sequelize.define(alias, cols, config)
    return Type_product;

}