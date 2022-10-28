
const express=require('express')
const router=express.Router()
//desetructurar el arcivo
const {crearuser,
    traeruserporid,
    getUsers,
    actualizaruser,
    borraruser} =require('../controllers/UserController')


router.route('/')
                .get(getUsers)
                .post(crearuser)
router.route('/:id')
.get(traeruserporid)
.put(actualizaruser)
.delete(borraruser)



//el objeto router es el que contiene todas las rutas
module.exports=router