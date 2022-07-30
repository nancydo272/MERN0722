import  {useState} from 'react'; 

const PersonCard = (props) => {
    //destructuring to get variable from App.js into props
    const {firstName, lastName, age, hairColor, people, setPeople, id} = props; 

    //getter and setters for state to hold info going down the app
    // const [state, setState] = useState(20);  
    
    const deleteHandler = () => {
        const newList = people.filter((p)=> p.id !== id)
        setPeople(newList); 
    }
    const changeAge = ()=> {
        const newAge = Math.floor(Math.random() * 100)
        const newPeople = people.map((p)=>{
            if(p.id === id){
                const updatedPerson = {...p, age:newAge}
                return updatedPerson; 
            }
            return p; 
        })
        setPeople(newPeople); 
    }

    return(
        <div className="m-5 p-4">
            <h2>{ lastName }, {firstName} </h2>
            <p> Age: { age } </p>
            <p> Hair Color: { hairColor}</p>
            {/* <button onClick = {() => setState(state + 1)} >Birthday Button for { props.firstName } {props.lastName } </button> */}
            <button onClick ={deleteHandler} className ="btn btn-danger"> Delete</button>
            <button onClick={changeAge} className="btn btn-info">Change Age</button>
        </div>
    ); 
}
export default PersonCard; 