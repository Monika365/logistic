const DeliveryVehiclesDAO = require('../dao/dao_DeliveryVehicles');
// const jwt = require('jsonwebtoken');
// const utility = require('../utils/utility');
// const EmailService = require('./email-service');
// const CacheService = require('./cache-service');
const DeliveryVehiclesService = {
    create: (payload) => {
        console.log('Payload in service', payload);
        return new Promise(async (resolve, reject) => {
            
                DeliveryVehiclesDAO.create(payload).then(result => {
                    resolve({ response: result, status: 201 });
                }).catch(error => {
                    reject({ status: 401, response: error });
                })


        })
    },
    getDeliveryVehicles:(payload)=>{
        return new Promise((resolve,reject)=>{
            DeliveryVehiclesDAO.getDeliveryVehicles(payload).then(result=>{
                resolve({response:result});
            }).catch(error=>{
                reject(error)
            })
        })
    
    
},

UpdateDeliveryVehicles:(condition,payload)=>{
       
    return new Promise ((resolve,reject)=>{
DeliveryVehiclesDAO.updateDeliveryVehicles(condition,payload).then((result)=>{
resolve(result);
}).catch(error =>{
reject(error);
})
    })
    

},
}

module.exports = DeliveryVehiclesService;




