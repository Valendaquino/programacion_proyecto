module.exports = (sequelize, dataTypes)=>{

    let alias = 'Tipo_producto';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
       tipo_producto: {
            type: dataTypes.STRING,
            allowNull: true

        }

    };
    let config = {
        table: "tipo_producto",
        timestamps: false,
        underscored: true
    }

    const Tipo_producto = sequelize.define(alias, cols, config)
    return Tipo_producto;

}