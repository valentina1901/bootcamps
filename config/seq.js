

//traer dependenca de sequelize
const Sequelize= require('sequelize')

//definir objeto sequelize de conexion:
const sequelize = new Sequelize (
    //base de datos a la que se va a conectar 
    'devcamp2465880',
    'root',
    '',{
        //direccion del servidor
        host:'localhost',
        dialect:'mysql',
        port:'3307'
    }
)
module.exports = sequelize