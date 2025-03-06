import express from 'express'
import {PORT} from './config/env.js'
import authRouter from  './routes/auth.routes.js'
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscriptions.routes.js';
import connectToDatabase from './database/mongodb.js';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/subscription', subscriptionRouter)

app.use(errorMiddleware)

app.get('/', (req, res)=>{
    res.send( "Welcome to Express Server...")
})

app.listen(PORT, async()=>{
    console.log(`Server Running on Port http://localhost:${PORT}`);
    await connectToDatabase();
})

export default app;