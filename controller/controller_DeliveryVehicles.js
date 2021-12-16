const express = require('express');
const router = express.Router();
const DeliveryVehiclesService = require('../service/service_DeliveryVehicles');
// const MiddlewareService = require('../service/middleware-service');
router.post('/create', function (req, res) {
    console.log('body data in  controller received', req.body);
   DeliveryVehiclesService.create(req.body).then(result => {
        res.status(result.status).send(result.response);
    }).catch(err => {
        res.status(err.status).send(err || err.response);
    })
})
  

router.get('/getitem',function(req, res){
   DeliveryVehiclesService.getitem(req.query).then((result)=>{
        res.status(201).send(result);
}).catch((error) => {
        res.status(500).send(error);
    })
})



router.put('/Updateitem/:activeOrderscount', function (req, res) {
    console.log(req.params,req.body );
    
       DeliveryVehiclesService.Updateitem(req.params, req.body).then((result)=>{
     res.status(201).send(result);
     }).catch((error)=>{
         res.status(500).send(error);
     })
     })
module.exports = router;