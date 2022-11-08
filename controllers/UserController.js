//onjeto de conexión
const sequelize=require('../config/seq')
//DataTypes
const {DataTypes, ValidationError}=require('sequelize')
//modelo
const UserModel=require('../models/user')
//crear el objeto usuario
const User=UserModel(sequelize, DataTypes)


//obtener recurso por id
exports.getUsers = async(req, res) =>{
    try {
        const users = await User.findAll();
    res.status(200).json(
        {
            //"!MENSAJE IMPORTANTE!" : `se trae todos los Users`
            "sucess": true,
            "data": users
        }
    )
    } catch (error) {
        res.status(500)
        .json({
            "success": false,
            "errors": "error de servidor"
        })
    }
}

//obtener recurso por id
exports.traeruserporid=async(req, res)=>{
    try {
        const usersid = await User.findByPk(req.params.id);
        if (!usersid){
            res.status(422).json(
                {
                    "succes":false,
                    "errors":[
                        "usuario no existe"
                    ]
                }
            )
        }
    } catch (error) {
        res.status(500)
        .json({
            "success": false,
            "errors": "error de servidor"
        })
    }
}



//POST: crear un nuevo recurso
//el 201 es para crear
exports.crearuser=async(req, res)=>{
   try {
    const newUser = await User.create(req.body);
    res.status(201).json(
        {
            "success": true,
            "data": newUser
        }        
    )
   } catch (error) {   
     //variable errores
     //map recorre un arreglo que pone algo en otro arreglo
    if(error instanceof ValidationError){
     const errores= error.errors.map((e)=>e.message)
    res
    .status(422)
    .json({
        "succes":false,
        "errors":errores
    })
   }else{
    res
    .status(500)
    .json({
        "succes":false,
        "errors":"error del servidor"
    })
   }
 }                                                 
}

//PUT - PATCH = actualizar
exports.actualizaruser=async(req, res)=>{
    try {
        //consultar datos actualizados
        const upUser=await User.findByPk(req.params.id)
        if(!upUser){
            //response de usuario no encontrado
            res.status(422).json(
                {
                    "succes":false,
                    "errors":[
                        "usuario no existe"
                    ]
                }
            )
        }else{
            //actualizar usuario por id
            await User.update(req.body,{
                where:{
                    id: req.params.id
                }
            });
            //seleccionar usuario actualizado
            const userAct =await User.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success": true,
                "data": userAct
            })
        }  
    } catch (error) {
        res.status(500)
        .json({
            "success": false,
            "errors": "error de servidor"
        })
    }
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
            "success":true,
            "data":u
        }
    )
}