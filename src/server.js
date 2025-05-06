import express from 'express'
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import mainRoutes from './main.routes.js'
import userRoutes from './user.routes.js' 
import compression from 'compression';


const app = express()
const PORT = 8080;

const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
})

// Apply the rate limiting middleware to all requests
app.use(limiter)
app.use(express.json())
app.use(helmet())
app.use(compression)

app.use('/v1',mainRoutes)
app.use('/v1/user',userRoutes)


app.listen(PORT,()=>{
    console.log("Server Listening on port :",PORT)  
})