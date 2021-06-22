module.exports = (sequelize, dataTypes)=>{

    let alias= 'Comment';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
       text_: {
            type: dataTypes.STRING,
           

        },
        user_id: {
            type: dataTypes.INTEGER,
           
        },
        product_id: {
            type: dataTypes.DATE,
            
        }
        

    };
    let config = {
        table: "comments",
        timestamps: true,
        underscored: true
    }

    const Comment = sequelize.define(alias, cols, config)

    Comment.associate = (models)=>{
        Comment.belongsTo(models.User,{
            as:'user',
            foreingKey:'user_id'
        });
        Comment.belongsTo(models.Product,{
            as:'product',
            foreingKey:'product_id'

        })
    }

    return Comment;

}