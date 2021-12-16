const ItemModel = require('../model/model_item');
const ItemDAO = {
    create:(payload)=>{
        console.log('Payload in dao', payload);

        return new ItemModel({
             name:payload.name,
             price:payload.price,
        }).save();
    },



    getitem:(payload)=>{
        return ItemModel.findOne(payload);
    },
            updateitem:(condition,payload)=>{
                console.log(condition,payload+'inside Dao');
                
                return  ItemModel.updateOne(condition, {$set:payload});
            }

}

module.exports = ItemDAO;