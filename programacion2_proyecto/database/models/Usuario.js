module.exports = (sequelize, dataTypes)=>{

    let alias = 'Usuario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
       name: {
            type: dataTypes.STRING,
            allowNull: true

        },
        surname: {
            type: dataTypes.STRING,
            allowNull: true
        },
        username: {
            type: dataTypes.STRING,
            allowNull: true
        },
        birth_date: {
            type: dataTypes.DATE,
            allowNull: true
        },
        email: {
            type: dataTypes.STRINNG,
            allowNull: true
        },
        pasword:{
            type: dataTypes.STRING,
            allowNull: true
        },
        confirm_pasword:{
            type: dataTypes.STRING,
            allowNull: true
        }

    };
    let config = {
        table: "usuarios",
        timestamps: false,
        underscored: true
    }

    const Usuario = sequelize.define(alias, cols, config)
    return Usuario;

}