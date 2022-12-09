import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import hotelRoute from './routes/auth.js'
import roomsRoute from './routes/auth.js'
import usersRoute from './routes/auth.js'
import cookieParser from "cookie-parser"
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(proccess.env.MONGO);
        console.log('connected successfully to mongodb database');
    } catch (err) {
        throw err;
    }
}
mongoose.connection.on('disconnected', () => {
    console.log('mogodb disconnected')
})

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelRoute);
app.use('/api/rooms', roomsRoute);

//error handling
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.listen('8080', ()=>{
    connect()
    console.log('connected to backend')
})