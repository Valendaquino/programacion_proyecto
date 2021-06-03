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
         created_at:{
             type:dataTypes.DATE
         },
         updated_at:{
            type:dataTypes.DATE
         }
        
        };
    let config = {
        table: "users",
        timestamps: false,
        underscored: true
    }

    const User = sequelize.define(alias, cols, config)

   User.associate = (models)=>{
    User.belongsTo(models.Product,{
        as:'product',
        foreingKey:'user_id'
    });
}

    return User;
}