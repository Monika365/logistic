const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/logisticdb', ()=>{
    console.log('Connected to database successfully');
});

module.exports = mongoose;
