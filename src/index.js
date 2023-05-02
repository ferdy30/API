'use strict'
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require('morgan');

require("dotenv").config();
const Rutas = require("./routes/route.js")


const app = express();
const port = process.env.port || 9000;
app.set('json spaces', 2);

//MIDDLEWARE
app.use(morgan('dev'));

app.use(express.json());
app.use('/api', Rutas) 

app.use(cors());

//RUTAS

app.get('/', (req, res) =>{
    res.send('Welcome to my API');
})


//MONGODB CONNECTION
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log('Connected to MongoDB'))
.catch((error) => console.log(error));



app.listen(9000, ()=> console.log('server listening on port', port ) );