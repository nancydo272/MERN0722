const express = require('express'); 
const app = express()
const PORT = 8000; 

const { faker } = require ('@faker-js/faker'); 

app.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({entended:true}))

const createUser =() => {
    return {
        _id:faker.datatype.uuid(), 
        first_name: faker.name.firstName(), 
        last_name:faker.internet.email(), 
        password:faker.internet.password(), 
        phone_number:faker.phone.number()
    }
}

app.get('/user', (req, res)=>{
    const user = createUser()
    res.json(user)
})

app.post('/addUser', (res,req)=>{
    console.log(req.body)
})


//first 3 lines are requred for express
//app.listen() --> use app to represent a function from express, and listen() runs our server.js
//listen(PORT, ()=>{...}) takes in 2 parameters: the port variable and a call back function 
//for out and points in our server need app.get or .any HTTP very and it take 2 parameters
//app.get('path', callback function ), and the call back function needs req, res passed through for request and response. 
//B/c we are on a server, when we console log things, we will only see them in the terminal on the backend and not the front end
// npm install @faker-js/faker --save-d for faker API
//going to run createUser function with the get request object, and then JSON reponse object

//middleware function is used on the request object before it gets to the server as an endpoint, below are used as middleware
//important for post request
// app.use(express.json())
// app.use(express.urlencoded({encoded:true}))


// app.get('/user/:word', (req, res)=>{
//     const user = createUser()
//     res.json(user)
// })