import express from 'express'

import mainRoutes from './main.routes.js'
import userRoutes from './user.routes.js' 

const app = express()
const PORT = 8080;

const STATUS={
    'SUCCESS':'OK',
    'FAILURE':'ERROR'
}

app.use(express.json())

app.use('/v1',mainRoutes)
app.use('/v1/user',userRoutes)


app.listen(PORT,()=>{
    console.log("Server Listening on port :",PORT)  
})