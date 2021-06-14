module.exports = (sequelize, dataTypes)=>{

    let alias = 'Genre';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false

        }

    };
    let config = {
        tableName: "genres",
        timestamps: false,
        underscored: true
    }

    const Genre = sequelize.define(alias, cols, config);
    Genre.associate = (models)=>{
        Genre.hasMany(models.Product, {
            as:'products',
            foreingKey: 'genre_id'
        })
    }

    return Genre;

}