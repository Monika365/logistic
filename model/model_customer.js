const mongoose = require('../db');
const Schema = mongoose.Schema;


const CustomersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    
});


module.exports = mongoose.model('customer', CustomersSchema);