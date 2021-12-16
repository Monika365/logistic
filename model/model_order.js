const mongoose = require('../db');
const Schema = mongoose.Schema;
// const uniqueValidator = require('mongoose-unique-validator');
// const {alphanumeric} = require('validator');
const OrderSchema = new Schema({

    orderNumber: {
        type: Number,
        required: true,
        unique:true,
        
    },

    itemId:{
        type:Schema.Types.ObjectId,
        ref:'item'
    },
    customerId:{
        type:Schema.Types.ObjectId,
        ref:'customer'
    },
    deliveryVehiclesId:{
        type:Schema.Types.ObjectId,
        ref:'deliveryVehicles'
    },

  
    isdelivered:{
        type:Boolean,
        default:false,

    }
});


module.exports = mongoose.model('OrderSchema', OrderSchema);