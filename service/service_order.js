const orderDAO = require('../dao/dao_order');
const customerDAO = require('../dao/dao_customer');
const DeliveryVehiclesDAO = require('../dao/dao_DeliveryVehicles');
// const jwt = require('jsonwebtoken');
// const utility = require('../utils/utility');
// const EmailService = require('./email-service');
// const CacheService = require('./cache-service');
const orderService = {
    create: (payload) => {
        console.log('Payload in service', payload);
        return new Promise(async (resolve, reject) => {
            let result =  await (customerDAO.create(payload.city) == DeliveryVehiclesDAO.create(payload.city)) ;
            console.log(result, "in dao")
            if(result)
                orderDAO.create(payload).then(result => {
                    resolve({ response: result, status: 201 });
                    
                }).catch(error => {
                    reject({ status: 401, response: error });
                })


        })
    },
    getorder:(payload)=>{
        return new Promise((resolve,reject)=>{
            orderDAO.getorder(payload).then(result=>{
                resolve({response:result});
            }).catch(error=>{
                reject(error)
            })
        })
    
    
},

Updateorder:(condition,payload)=>{
       
    return new Promise ((resolve,reject)=>{
orderDAO.updateorder(condition,payload).then((result)=>{
resolve(result);
}).catch(error =>{
reject(error);
})
    })
    

},
}

module.exports = orderService;




