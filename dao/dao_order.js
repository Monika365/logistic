const orderModel = require('../model/model_order');

const orderDAO = {
    create:(payload)=>{
        console.log('Payload in dao', payload);

        return new orderModel({
            orderNumber:payload.orderNumber,
            itemId:payload.itemId,
            customerId:payload.customerId,
            deliveryVehicles:payload.ddeliveryVehicles,
            isdelivered:payload.isdelivered,
        }).save();
    },



    getorder:(payload)=>{
        return orderModel.findOne(payload);
    },
            updateorder:(condition,payload)=>{
                console.log(condition,payload+'inside Dao');
                
                return  orderModel.updateOne(condition, {$set:payload});
            }

}

module.exports = orderDAO;