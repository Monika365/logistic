const mongoose = require('../db');
const Schema = mongoose.Schema;
// const uniqueValidator = require('mongoose-unique-validator');
// const {isAlphanumeric} = require('validator');
const DeliveryVehiclesSchema = new Schema({

    registrationNumber: {
        type: String,
        required: true,
        unique:true,
        // validate: [ isAlphanumeric, "not valid"]
    },

    city: {
        type: String,
        required: true,
    },
    vehicleType: {
        type: String,
        enum:['bike', 'truck'],
        required: true
    },
  
    activeOdersCount:{
        type:Number,
        default:0,
        max:2
    }
});

// DeliveryVehiclesSchema.plugin(uniqueValidator);

module.exports = mongoose.model('deliveryVehicles', DeliveryVehiclesSchema);