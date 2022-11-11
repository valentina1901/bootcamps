
const express=require('express')
const router=express.Router()
//desetructurar el arcivo
const {crearcursos,
    traercursosporid,
    getCursos,
    actualizarcursos,
    borrarcursos} =require('../controllers/CoursesController')

router.route('/')
                .get(getCursos)
                .post(crearcursos)
router.route('/:id')
.get(traercursosporid)
.put(actualizarcursos)
.delete(borrarcursos)


//el objeto router es el que contiene todas las rutas
module.exports=router