module.exports = (sequelize, dataTypes)=>{

    let alias= 'Comment';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
       text: {
            type: dataTypes.STRING,
           

        },
        comment_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
           
        },
        product_id: {
            type: dataTypes.DATE,
            
        }
       //foreing key (user_id)
       //foreing key (product_id)
        

    };
    let config = {
        table: "comments",
        timestamps: false,
        underscored: true
    }

    const Comments = sequelize.define(alias, cols, config)
    return Comments;

}