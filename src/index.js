'use strict'
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require('morgan');

require("dotenv").config();

//OBTENCION DE RUTAS
const Rutas = require("./routes/route.js")
const MenuRutas = require("./routes/MenuR.js")
const MenuRutas2 = require("./routes/Menu2.js")
const MenuRutas3 = require("./routes/Menu3.js")
const MenuRutas4 = require("./routes/Menu4.js")
const restaurant = require("./routes/Restaurante.js")





const app = express();
const port = process.env.port || 9000;
app.set('json spaces', 2);

//MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', Rutas)
app.use('/api/restaurantes/1', MenuRutas) 
app.use('/api/restaurantes/2', MenuRutas2) 
app.use('/api/restaurantes/3', MenuRutas3)
app.use('/api/restaurantes/4', MenuRutas4)
app.use('/api', restaurant)

app.use(cors());

//RUTAS

app.get('/', (req, res) =>{
    res.send('Welcome to my API');
})


//MONGODB CONNECTION
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log('Connected to MongoDB'))
.catch((error) => console.log(error));



app.listen(9000, ()=> console.log('server listening on port', port ) );