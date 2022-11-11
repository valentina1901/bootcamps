
const express=require('express')
const router=express.Router()
//desetructurar el arcivo
const {crearreviews,
    traerreviewsporid,
    getreviews,
    actualizarreviews,
    borrarreviews} =require('../controllers/ReviewsController')

router.route('/')
                .get(getreviews)
                .post(crearreviews)
router.route('/:id')
.get(traerreviewsporid)
.put(actualizarreviews)
.delete(borrarreviews)


//el objeto router es el que contiene todas las rutas
module.exports=router