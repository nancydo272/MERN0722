const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors'); 
require("./config/mongoose.config");

app.use(express.json(),express.urlencoded({extended:true})); 

app.use(
    cors({
        origin: 'http://localhost:3000',
    }),
); 

require('./routes/product.routes')(app); 

app.listen(port, () => console.log(`Listening on port: ${port}`) );
