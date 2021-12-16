const express = require('express');
const router = express.Router();
const ItemService = require('../service/service_item');
// const MiddlewareService = require('../service/middleware-service');
router.post('/create', function (req, res) {
    console.log('body data in  controller received', req.body);
    ItemService.create(req.body).then(result => {
        res.status(result.status).send(result.response);
    }).catch(err => {
        res.status(err.status).send(err || err.response);
    })
})
  

router.get('/getitem',function(req, res){
    ItemService.getitem(req.query).then((result)=>{
        res.status(201).send(result);
}).catch((error) => {
        res.status(500).send(error);
    })
})



router.put('/Updateitem/:name', function (req, res) {
    console.log(req.params,req.body );
    
        ItemService.Updateitem(req.params, req.body).then((result)=>{
     res.status(201).send(result);
     }).catch((error)=>{
         res.status(500).send(error);
     })
     })
module.exports = router;