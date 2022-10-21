const express=require('express')
const dontenv=require('dotenv')
const colors=require('colors')

//dependencias a las rutas
const bootcampRoutes=require('./routes/BootcamRoutes')

//ESTABLECER ARCHIVO DE CONFIGURACIÓN con variables de entorno del proyecto
dontenv.config({
    path: './config_env/config.env'
})

//1. Cear el objeto app
const app=express()

app.use('/api/v1/bootcamps', bootcampRoutes)
//crear rutas(endoint, uri) para los bootcamps







//3. Ejecutar servidor de dearrollo de express
//(voy a ejecutar un servidor y este va a escuchar por un puerto)
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado en puerto: ${process.env.PORT}`.bgYellow.blue)
})

