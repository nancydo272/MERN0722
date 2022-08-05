import React from 'react'; 
import { useParams } from 'react-router-dom';
import { Link, NavLink} from 'react-router-dom'; 

const Home = (props) => {
    const {num} = useParams();  
    
    const {people} = props; 

    return (
    <div>
        <h1>Home</h1>
        <h2>My number from the url is: {num} </h2>
        <Link to="/about">About Page</Link>
        {
            people.map((person)=>{
                return(
                    <div>
                        <Link to={`/person/${person.id}`}>{person.name}</Link>
                    </div>
            )})
        }
    </div>
    )
}

export default Home

//useParam allows us to pull data from the url
//<a href="/about">About Page</a> --> this is going to refresh the page, and therefore we are going to loose state
// instead of <a> --> we can use Link or NavLink
// {
//     people.map((person)=>{
//         return(
//         <div>
//             <h1>{person.id}</h1>
//             <h1>{person.name}</h1>
//             <h2>person.age</h2>
//             <h3>{person.somethingElse}</h3>
//         </div>
//     )})
// }