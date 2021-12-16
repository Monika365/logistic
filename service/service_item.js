const ItemDAO = require('../dao/dao_item');
// const jwt = require('jsonwebtoken');
// const utility = require('../utils/utility');
// const EmailService = require('./email-service');
// const CacheService = require('./cache-service');
const ItemService = {
    create: (payload) => {
        console.log('Payload in service', payload);
        return new Promise(async (resolve, reject) => {
            
                ItemDAO.create(payload).then(result => {
                    resolve({ response: result, status: 201 });
                }).catch(error => {
                    reject({ status: 401, response: error });
                })


        })
    },
    getitem:(payload)=>{
        return new Promise((resolve,reject)=>{
            ItemDAO.getitem(payload).then(result=>{
                resolve({response:result});
            }).catch(error=>{
                reject(error)
            })
        })
    
    
},

Updateitem:(condition,payload)=>{
       
    return new Promise ((resolve,reject)=>{
ItemDAO.updateitem(condition,payload).then((result)=>{
resolve(result);
}).catch(error =>{
reject(error);
})
    })
    

},
}

module.exports = ItemService;




