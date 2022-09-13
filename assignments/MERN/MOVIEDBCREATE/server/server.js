const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors'); 
require("./config/mongoose.config");
require('dotenv').config(); 
const cookieParser = require('cookie-parser'); 

app.use(cookieParser()); 
//need this line for POST requests to a server route, if not it will not work. 
//also allows us to send nested data
app.use(express.json(),express.urlencoded({extended:true})); 

//need cors since we are running 2 diferent servers at the same time on different localhosts. 
//app.use is middleware ==> it is going to run on every single route. 
app.use(
    cors({
        origin: 'http://localhost:3000',
    }),
); 

require('./routes/movie.routes')(app); 
require('./routes/user.routes')(app); 

//app.listen runs our server and it takes port and callback function
app.listen(port, () => console.log(`Listening on port: ${port}`) );

// //HTTP verbs don't need since we have it in our routes 
// app.get('/api/path', (req, res)=> {
//     //run function 
// })