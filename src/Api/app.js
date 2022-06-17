import express  from "express"
import cors from 'cors'
//importamos nuestro enrutador
import productoRoutes from './routes/productos.js'
import userRoutes from './routes/users.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/productos', productoRoutes)
app.use('/usuarios', userRoutes)

/*
try {
    await Conexion.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}
*/

app.get('/', (req, res)=>{
    res.send('Bienvenido al API de QuantumSwapp!')
})

app.listen( process.env.PORT || 4000, ()=>{
    console.log('Servidor Iniciado!')
})
