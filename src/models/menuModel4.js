const mongoose = require("mongoose")
const MenuSchema = mongoose.Schema(

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
    },
    price: {
        type : String,
    },
    image: {
        type : String,
    },
    
}
);

module.exports = mongoose.model('menu4', MenuSchema);