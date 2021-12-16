const express = require('express');
const router = express.Router();
const orderService = require('../service/service_order');
// const MiddlewareService = require('../service/middleware-service');
router.post('/create', function (req, res) {
    console.log('body data in  controller received', req.body);
    orderService.create(req.body).then(result => {
        res.status(result.status).send(result.response);
    }).catch(err => {
        res.status(err.status).send(err || err.response);
    })
})
  

router.get('/getorder',function(req, res){
    orderService.getorder(req.query).then((result)=>{
        res.status(201).send(result);
}).catch((error) => {
        res.status(500).send(error);
    })
})



router.put('/Updateorder/:name', function (req, res) {
    console.log(req.params,req.body );
    
        orderService.Updateorder(req.params, req.body).then((result)=>{
     res.status(201).send(result);
     }).catch((error)=>{
         res.status(500).send(error);
     })
     })
module.exports = router;