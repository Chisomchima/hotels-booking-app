import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import hotelRoute from './routes/auth.js'
import roomsRoute from './routes/auth.js'
import usersRoute from './routes/auth.js'

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
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelRoute);
app.use('/api/rooms', roomsRoute);



app.listen('8080', ()=>{
    connect()
    console.log('connected to backend')
})