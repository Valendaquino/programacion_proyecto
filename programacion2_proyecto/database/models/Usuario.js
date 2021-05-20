module.exports = (sequelize, dataTypes)=>{

    let alias = 'User';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
       name_users: {
            type: dataTypes.STRING,
            allowNull: false

        },
        surname: {
            type: dataTypes.STRING,
            allowNull: false
        },
        username: {
            type: dataTypes.STRING,
            allowNull: false
        },
        birth_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        pasword:{
            type: dataTypes.STRING,
            allowNull: false
        },
        confirm_pasword:{
            type: dataTypes.STRING,
            allowNull: false
        }

    };
    let config = {
        table: "users",
        timestamps: false,
        underscored: true
    }

    const User = sequelize.define(alias, cols, config)
    return User;

}