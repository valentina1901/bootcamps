//onjeto de conexión
const sequelize=require('../config/seq')
//DataTypes
const {DataTypes, ValidationError}=require('sequelize')
//modelo
const reviewsModel=require('../models/review')
//crear el objeto usuario
const reviews=reviewsModel(sequelize, DataTypes)


//obtener reviews recursos
exports.getreviews = async(req, res) =>{
    try {
        const reviewsAll = await reviews.findAll();
    res.status(200).json(
        {
            //"!MENSAJE IMPORTANTE!" : `se trae todos los reviews`
            "sucess": true,
            "data": reviewsAll
        }
    )
    } catch (error) {
        res.status(500)
        .json({
            "success": false,
            "errors": error
        })
    }
}

//obtener rereviews por id
exports.traerreviewsporid=async(req, res)=>{
    try {
        const reviewsid = await reviews.findByPk(req.params.id);
        if (!reviewsid){
            res.status(422).json(
                {
                    "succes":false,
                    "errors":[
                        "reviews no existe"
                    ]
                }
            )
        }else {
            res.status(200).json(
            {
                //"!MENSAJE IMPORTANTE!" :  `users cuyo ID es: ${req.params.id}`
                "sucess": true,
                "errors": reviewsid
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



//POST: crear un nuevo rereviews
//el 201 es para crear
exports.crearreviews=async(req, res)=>{
   try {
    const newreviews = await reviews.create(req.body);
    res.status(201).json(
        {
            "success": true,
            "data": newreviews
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
        "errors":error
    })
   }
 }                                                 
}

//PUT - PATCH = actualizar
exports.actualizarreviews=async(req, res)=>{
    try {
        //consultar datos actualizados
        const upreviews=await reviews.findByPk(req.params.id)
        if(!upreviews){
            //response de usuario no encontrado
            res.status(422).json(
                {
                    "succes":false,
                    "errors":[
                        "reviews no existe"
                    ]
                }
            )
        }else{
            //actualizar usuario por id
            await reviews.update(req.body,{
                where:{
                    id: req.params.id
                }
            });
            //seleccionar usuario actualizado
            const reviewsAct =await reviews.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success": true,
                "data": reviewsAct
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
exports.borrarreviews=async(req, res)=>{

//buscarusuario por id
const u= await reviews.findByPk(req.params.id)

// borrar usuario po id 
await reviews.destroy({
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