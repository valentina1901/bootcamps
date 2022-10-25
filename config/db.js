
//verificar la conexion
const sequelize = require('./seq')
const UserModel = require('../models/user')
const colors = require('colors')


//dependencia a dataType
const {DataTypes}=require('sequelize')

//crear el modelo
const User= UserModel(sequelize, DataTypes)


//crear una funcion asincrona para una funcion 
const connectDB = async()=>{
try{
    await sequelize.authenticate()
    console.log('conexion exitosa'.bgBlue.red)
    //Seleccionar los users hasta el momento
    // const users=await User.findAll();
    // console.log(users)
    // const jane = await User.create({ name: "valentina", assword: "13365" });
    // console.log(jane);
}catch(error){
    console.error(error)
    }
}
//connectDB()
//exportar
module.exports=connectDB