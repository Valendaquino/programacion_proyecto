module.exports = (sequelize, dataTypes)=>{

    let alias= 'Comentario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
       texto: {
            type: dataTypes.STRING,
           

        },
        fecha_creacion: {
            type: dataTypes.DATE,
            allowNull: true
        },
        usuario_id: {
            type: dataTypes.INTEGER,
           
        },
        producto_id: {
            type: dataTypes.DATE,
            
        }
       
        

    };
    let config = {
        table: "comentarios",
        timestamps: false,
        underscored: true
    }

    const Comentario = sequelize.define(alias, cols, config)
    return Comentario;

}