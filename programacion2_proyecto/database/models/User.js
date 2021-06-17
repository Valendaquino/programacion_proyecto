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
        password_:{
            type: dataTypes.STRING,
            allowNull: false
        },
        confirm_password:{
            type: dataTypes.STRING,
            allowNull: false
         },
         profile_photo:{
             type: dataTypes.STRING
         },
       
        
        };
    let config = {
        tableName: "users",
        timestamps: true,
        underscored: true
    }

    const User = sequelize.define(alias, cols, config)

   User.associate = (models)=>{
        User.hasMany(models.Product,{
            as:'product',
            foreingKey:'user_id'
        });
        User.hasMany(models.Comment,{
            as:'comments',
            foreingKey:'user_id'
        });
}

    return User;
}