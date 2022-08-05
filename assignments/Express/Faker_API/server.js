
const faker = require("faker"); 

const express = require("express"); 
const app = express(); 
const port = 8000; 

//create function for createUser
const createUser = () => ({
    _id: faker.datatype.uuid(), 
    firstName: faker.name.firstName(), 
    lastName: faker.name.lastName(),
    email: faker.internet.email(), 
    phoneNumber: faker.phone.phoneNumber(), 
    password: faker.internet.password(),
});

// console.log(createUser()); 

//create function for createCompany
const createCompany = () =>({
    _id: faker.datatype.uuid(), 
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(), 
        city: faker.address.city(), 
        state: faker.address.state(), 
        zipCode: faker.address.zipCode(), 
        country: faker.address.country()
    }
}); 
// console.log(createCompany()); 
//Routes  "/api/users/new" that returns a new user
app.get("/api/users/new",(req, res)=>{
    const newUser = createUser(); 
    res.json({newUser}); 
}); 


//Route "/api/companies/new" that returns a new company
app.get("/api/companies/new",(req, res)=>{
    const newCompany = createCompany(); 
    res.json({newCompany}); 
}); 

//Route "/api/user/company" that returns both a new user and a new company

app.get("/api/user/company",(req, res)=>{
    const newUser = createUser(); 
    const newCompany = createCompany(); 
    const responseObj = {
        user: newUser, 
        company: newCompany
    }; 
    res.json({responseObj}); 
}); 

app.listen( port, ()=> console.log(`Listenting on port:${port}`)); 

//User Object
//password,email,phoneNumber,lastName,firstName,_id
//Company Object
//_id, name, address(street, city, state, zipCode, country)