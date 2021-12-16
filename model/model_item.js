
const mongoose = require('../db');
const Schema = mongoose.Schema;


const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    
});


module.exports = mongoose.model('item', ItemSchema);