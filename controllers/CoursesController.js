//onjeto de conexión
const sequelize=require('../config/seq')
//DataTypes
const {DataTypes, ValidationError}=require('sequelize')
//modelo
const CursoModel=require('../models/cursos')
//crear el objeto usuario
const Curso=CursoModel(sequelize, DataTypes)


//obtener recucursos
exports.getCursos = async(req, res) =>{
    try {
        const cursos = await Curso.findAll();
    res.status(200).json(
        {
            //"!MENSAJE IMPORTANTE!" : `se trae todos los cursos`
            "sucess": true,
            "data": cursos
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
exports.traercursosporid=async(req, res)=>{
    try {
        const cursosid = await Curso.findByPk(req.params.id);
        if (!cursosid){
            res.status(422).json(
                {
                    "succes":false,
                    "errors":[
                        "curso no existe"
                    ]
                }
            )
        }else {
            res.status(200).json(
            {
                //"!MENSAJE IMPORTANTE!" :  `users cuyo ID es: ${req.params.id}`
                "sucess": true,
                "errors": cursosid
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
exports.crearcursos=async(req, res)=>{
   try {
    const newCurso = await Curso.create(req.body);
    res.status(201).json(
        {
            "success": true,
            "data": newCurso
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
exports.actualizarcursos=async(req, res)=>{
    try {
        //consultar datos actualizados
        const upCurso=await Curso.findByPk(req.params.id)
        if(!upCurso){
            //response de usuario no encontrado
            res.status(422).json(
                {
                    "succes":false,
                    "errors":[
                        "Curso no existe"
                    ]
                }
            )
        }else{
            //actualizar usuario por id
            await Curso.update(req.body,{
                where:{
                    id: req.params.id
                }
            });
            //seleccionar usuario actualizado
            const CursoAct =await Curso.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success": true,
                "data": CursoAct
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
exports.borrarcursos=async(req, res)=>{

//buscarusuario por id
const u= await Curso.findByPk(req.params.id)

// borrar usuario po id 
await Curso.destroy({
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