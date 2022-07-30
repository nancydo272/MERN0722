import {useState} from 'react'; 
import { nanoid } from 'nanoid'; 

const Form = (props)=> {
    //use props to get info object from App.js with destructuring
    const {people, setPeople} = props; 
    //storing each input into it's own peice of state, for number you want to start at an intital value 
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState(''); 
    const [age, setAge] = useState(0); 
    const [hairColor, setHairColor] = useState(''); 
    
    const submitHandler = (e) => {
        e.preventDefault(); 
        //we are only console.logging b/c we aren't sending the form data to a DB
        // condition only runs if there is something in the field 
        if(firstName && lastName && age && hairColor){
            console.log({
                firstName, 
                lastName, 
                age,
                hairColor
            })
            //personObj is whatever the use types into the form
            const personObj = {
                id: nanoid(),
                firstName, 
                lastName, 
                age,
                hairColor
            }
            //setPeople is rendering the current people array plus adding the new personObj --> CRUD: Create
            setPeople([...people,personObj]); 
        }   

        //when this submitHandler function runs when we submit the form, it will set the state. 
        setFirstName('');
        setLastName(''); 
        setAge(0);
        setHairColor('');
    }

    return(
        <div>
            <form onSubmit={ submitHandler }>
                <label>First Name: </label>
                <input type ="text" value={firstName} onChange={((e)=>{
                    setFirstName(e.target.value)
                })}/>
                { firstName && firstName.length < 3 ? <p>Name must be longer than 3 characters </p>: null}
                {/* // To write validations, use ternory operators  //
                // start with your condition first, ? = if, : = else// */}
                
                <label>Last Name: </label>
                <input type ="text" value={lastName} onChange={((e)=>{
                    setLastName(e.target.value)
                })}/>
                <label>Age: </label>
                <input type ="number" value={age}onChange={((e)=>{
                    setAge(e.target.value)
                })}/>
                <label>Hair Color: </label>
                <input type ="text" value={hairColor} onChange={((e)=>{
                    setHairColor(e.target.value)
                })}/>
                <button> Add Person</button>
            </form>
        </div>
    )
}
    
    export default Form; 

//We want to store data into it's own peice of state --> a function gets triggered to store what we type into state
//e for the event object, it is will save information about that event object. 
//onChange is an event that triggers when anything in the input changes like when we type
//to clear the input boxes, we can clear them by setting value to the state at that time --> value={firstName}
//value tracks the current state inputs