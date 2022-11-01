

//traer dependenca de sequelize
const Sequelize= require('sequelize')
const dotenv = require('dotenv')

//donde esta el archivo de variables de netorno 
dotenv.config({
    path: './config_env/config.env'
})

//console.log(process.env.DB_NAME)

//definir objeto sequelize de conexion:
const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    //base de datos a la que se va a conectar 
    {
        //direccion del servidor
        host: process.env.DB_HOST,
        dialect:process.env.DB_MOTOR,
        port:process.env.DB_PORT
    }
)

module.exports = sequelize