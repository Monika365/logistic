const customerModel = require('../model/model_customer');
const customerDAO = {
    create:(payload)=>{
        console.log('Payload in dao', payload);

        return new customerModel({
             name:payload.name,
             city:payload.city,
        }).save();
    },



    getcustomer:(payload)=>{
        return customerModel.findOne(payload);
    },
            updatecustomer:(condition,payload)=>{
                console.log(condition,payload+'inside Dao');
                
                return  customerModel.updateOne(condition, {$set:payload});
            }

}

module.exports = customerDAO;