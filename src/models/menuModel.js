const mongoose = require("mongoose")
const MenuSchema = mongoose.Schema(

{
    
    name: {
        type: String,
        required: true,
    },
    type: {
        type : String,
    
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

module.exports = mongoose.model('menu', MenuSchema);