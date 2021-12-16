const express = require('express');
const router = express.Router();
const customerService = require('../service/service_cutomer');
// const MiddlewareService = require('../service/middleware-service');
router.post('/create', function (req, res) {
    console.log('body data in  controller received', req.body);
    customerService.create(req.body).then(result => {
        res.status(result.status).send(result.response);
    }).catch(err => {
        res.status(err.status).send(err || err.response);
    })
})
  

router.get('/getcustomer',function(req, res){
    customerService.getcustomer(req.query).then((result)=>{
        res.status(201).send(result);
}).catch((error) => {
        res.status(500).send(error);
    })
})



router.put('/Updatecustomer/:name', function (req, res) {
    console.log(req.params,req.body );
    
        customerService.Updatecustomer(req.params, req.body).then((result)=>{
     res.status(201).send(result);
     }).catch((error)=>{
         res.status(500).send(error);
     })
     })
module.exports = router;