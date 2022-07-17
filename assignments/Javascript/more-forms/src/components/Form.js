import React, { useState } from  'react';
    
const Form = (props )=> {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password, confirm };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName(""); 
        setEmail("");
        setPassword("");
        setConfirm(""); 
    };
    

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={props.firstName} onChange={ (e) =>setFirstName(e.target.value) } />
                { firstName.length <2 && firstName.length >0 ? (<p>First name must be at least 2 characters</p>) : null}
            </div>
            <div>
                <label>Last Name:  </label> 
                <input type="text" value={props.lastName} onChange={ (e) =>setLastName(e.target.value) } />
                { lastName.length <2 && lastName.length >0 ? (<p>Last name must be at least 2 characters</p>) : null}

            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={props.email} onChange={ (e) =>setEmail(e.target.value) } />
                { email.length <5 && email.length >0 ? (<p>Email must be at least 5 characters</p>) : null}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={props.password} onChange={ (e) =>setPassword(e.target.value)} />
                { password.length <8 && password.length >0 ? (<p>Passworkd must be at least 8 characters</p>) : null}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={props.confirm} onChange= {(e) =>setConfirm(e.target.value) } />
                { confirm !== password ? <p>First name must be at least 2 characters</p> : null}

            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default Form;
