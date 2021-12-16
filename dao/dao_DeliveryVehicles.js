const DeliveryVehiclesModel = require('../model/model_DeliveryVehicles');
const DeliveryVehiclesDAO = {
    create:(payload)=>{
        console.log('Payload in dao', payload);

        return new DeliveryVehiclesModel({
             registrationNumber:payload.registrationNumber,
             city:payload.city,
             vehicleType:payload.vehicleType,
             activeOdersCount:payload.activeOdersCount,
             
        }).save();
    },



    getDeliveryVehicles:(payload)=>{
        return DeliveryVehiclesModel.findOne(payload);
    },
            updateDeliveryVehiclesModel:(condition,payload)=>{
                console.log(condition,payload+'inside Dao');
                
                return  DeliveryVehiclesModel.updateOne(condition, {$set:payload});
            }

}

module.exports = DeliveryVehiclesDAO;