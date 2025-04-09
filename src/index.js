import express from 'express';
import morgan from 'morgan';
import citasRouter from './routes/citas.routes.js';

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//Routes
app.use(citasRouter)

app.listen(3000, () => {
    console.log("Server en el puerto 3000")
})