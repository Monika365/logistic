const customerDAO = require('../dao/dao_customer');
// const jwt = require('jsonwebtoken');
// const utility = require('../utils/utility');
// const EmailService = require('./email-service');
// const CacheService = require('./cache-service');
const customerService = {
    create: (payload) => {
        console.log('Payload in service', payload);
        return new Promise(async (resolve, reject) => {
            
                customerDAO.create(payload).then(result => {
                    resolve({ response: result, status: 201 });
                }).catch(error => {
                    reject({ status: 401, response: error });
                })


        })
    },
    getcustomer:(payload)=>{
        return new Promise((resolve,reject)=>{
            customerDAO.getcustomer(payload).then(result=>{
                resolve({response:result});
            }).catch(error=>{
                reject(error)
            })
        })
    
    
},

Updatecustomer:(condition,payload)=>{
       
    return new Promise ((resolve,reject)=>{
customerDAO.updatecustomer(condition,payload).then((result)=>{
resolve(result);
}).catch(error =>{
reject(error);
})
    })
    

},
}

module.exports = customerService;




