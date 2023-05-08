const mongoose = require("mongoose")
const MenuSchema = require("./menuModel")
const Schema = mongoose.Schema(
{
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type : String,
        required : true
    },
    number:{
        type: String,
        required: true
    },
    latitud: {
        type: Number,
        required: true
    },
    longitud: {
        type: Number,
        required: true
    },
    logo: {
        type : String,
        required : true
    },
    banner: {
        type : String,
        required : true
    },
    menu :  { type : Array , "default" : [] },
    ubicacion : { type : Array , "default" : [] },

},
);

 const schema = mongoose.model('Yaa', Schema);
 
 module.exports = schema