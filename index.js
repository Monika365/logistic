const express = require('express')
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('./db');

app.use('/items', require('./controller/controller_item'));
app.use('/delivery', require('./controller/controller_DeliveryVehicles'));
app.use('/customer', require('./controller/controller_customer'));
app.use('/order', require('./controller/controller_order'));




// http://localhost:3000/items/create

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000')
})




