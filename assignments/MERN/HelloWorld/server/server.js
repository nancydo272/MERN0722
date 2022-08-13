const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')    

app.use(cors()) 
app.use(express.json());        //this allows JSON objects to be posted
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/
require("./config/mongoose.config");
require('./routes/person.routes')(app); //used to import thr routes exports 

app.listen(port, () => console.log(`Listening on port: ${port}`) );
