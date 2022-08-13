import React from 'react'; 
import {NavLink} from 'react-router-dom'; 

const NavBar = () => {
    return (
        <div className="bg-dark nav-bar col-12 no-gutter fluid">
            <h1>Movie Database</h1>
            <NavLink to="/movielist" className="m-3">Home</NavLink>
            <NavLink to="/" className="m-3">Add Movie Form</NavLink>
        </div>
    )
}

export default NavBar