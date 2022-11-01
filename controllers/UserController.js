//onjeto de conexión
const sequelize=require('../config/seq')
//DataTypes
const {DataTypes}=require('sequelize')
//modelo
const UserModel=require('../models/user')
//crear el objeto usuario
const User=UserModel(sequelize, DataTypes)


//obtener recurso por id
exports.getUsers = async(req, res) =>{
    const users = await User.findAll();
    res.status(200).json(
        {
            //"!MENSAJE IMPORTANTE!" : `se trae todos los Users`
            "sucess": true,
            "data": users
        }
    )
}

//obtener recurso por id
exports.traeruserporid=async(req, res)=>{
    const usersid = await User.findAll();
    res.status(200).json(
        {
            "success": true,
            "data": usersid
        }
    )
}


//POST: crear un nuevo recurso
//el 201 es para crear
exports.crearuser=async(req, res)=>{
    const newUser = await User.create(req.body);
    res.status(201).json(
        {
            "success": true,
            "data": newUser
        }        
    )
}

//PUT - PATCH = actualizar
exports.actualizaruser=async(req, res)=>{
    //actualizar usuario por id
    await User.update(req.body,{
        where:{
            id: req.params.id
        }
    });
    //consultar datos actulizados
    const upUser=await User.findByPk(req.params.id)

    res.status(200).json(
        {
            "success": true,
            "data": upUser
        }
    )
}


//DELETE: borrar un bootcamp
exports.borraruser=async(req, res)=>{

//buscarusuario por id
const u= await User.findByPk(req.params.id)

// borrar usuario po id 
await User.destroy({
    where: {
      id:req.params.id
    }
  });

  //response
    res.status(200).json(
        {
            "succes":true,
            "data":u
        }
    )
}






