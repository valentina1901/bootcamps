
const express=require('express')
const dontenv=require('dotenv')
const colors=require('colors')
const listEndpoints=require('express-list-endpoints')


//dependencia a connexion bd
const connectDB= require('./config/db')

//dependencias a las rutas
const bootcampRoutes=require('./routes/BootcamRoutes')
const userRoutes=require('./routes/userRoutes')
const reviewsRoutes=require('./routes/reviewsRoutes')
const coursesRoutes=require('./routes/coursesRoutes')
const { connect } = require('./routes/BootcamRoutes')


//ESTABLECER ARCHIVO DE CONFIGURACIÓN con variables de entorno del proyecto
dontenv.config({
    path: './config_env/config.env'
})

//1. Crear el objeto app
const app=express()
app.use(express.json())

//ejecutar la conexion
connectDB()

app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/cursos', coursesRoutes)
app.use('/api/v1/reviews', reviewsRoutes)

console.log(listEndpoints(app))

//crear rutas(endoint, uri) para los bootcamps
//3. Ejecutar servidor de dearrollo de express
//(voy a ejecutar un servidor y este va a escuchar por un puerto)
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado en puerto: ${process.env.PORT}`.bgYellow.blue)
})

