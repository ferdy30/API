const mongoose = require("mongoose")
const MenuSchema = mongoose.Schema(

{
    
    _id: {
        type: Number,
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
        type : String
    }
}
);

module.exports = mongoose.model('restaurante', MenuSchema);