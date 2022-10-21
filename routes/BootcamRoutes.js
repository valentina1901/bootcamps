const express=require('express')
const router=express.Router()

//establecer las rutas de bootcamp
//get: obtener datos read

router.get('/', (req, res)=>{
    res.status(200).json(
        {
            "message": "Aquí se van a mostrar todos los bootcamps"
        }
    )
})

//obtener recurso por id
router.get('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message": `aquí va a mostrarse el bootcamp cuyo id es ${req.params.id}`
        }
    )
})


//POST: crear un nuevo recurso
//el 201 es para crear
router.post('/', (req, res)=>{
    res.status(201).json(
        {
            "message": "aquí va a crear bootcamp"
        }
    )
})

//PUT - PATCH
router.put('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message": `aquí va a actualizar el bootcamp ${req.params.id}`
        }
    )
})

//DELETE: borrar un bootcamp
router.delete('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message": `aquí se va a borrar el bootcamp ${req.params.id}`
        }
    )
})
//el objeto router es el que contiene todas las rutas
module.exports=router