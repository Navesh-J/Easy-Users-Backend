import express from 'express'
import appRoutes from './routes.js' 

const app = express()
const PORT = 8080;

const STATUS={
    'SUCCESS':'OK',
    'FAILURE':'ERROR'
}

app.use(express.json())

app.use('/v1',appRoutes)


app.listen(PORT,()=>{
    console.log("Server Listening on port :",PORT)  
})