import PersonCard from './components/PersonCard'; 
import Form from './components/Form'; 
import './App.css';
import { useState} from 'react'; 

function App() {
  //creating a state for people, so that we can manipulate the array
  //adding id key value pair to keep track of the person object in the people array
  const [people, setPeople] = useState([
    {
      id: 1,
      lastName: 'Doe', 
      firstName:'Jane', 
      age: 45,
      hairColor:'Black'
    }, 
    {
      id: 2,
      lastName: 'Smith', 
      firstName:'John', 
      age: 88,
      hairColor:'Brown'
    }, 
    {
      id: 3,
      lastName: 'Filmore', 
      firstName:'Millard', 
      age: 50,
      hairColor:'Brown'
    }, 
    {
      id: 4,
      lastName: 'Smith', 
      firstName:'Maria', 
      age: 62,
      hairColor:'Blonde'
    }
  ])
  
  
  
  //any time you write Javascript within JSX/HTML needs to be in curly brackets. 
  //can use high order functions when dealing with arrays, and dictionaries within objects. 
  //All high order functions take back a call back function as an input/parameter ((singlur object, index)=>{})
  //map will loop through arrays with a callback function and brings a new array. 
  //Then pass in the object to the component
  //For <Form> to have access to peopleArray, use props and pass them into the form people = {people}
  //variable on the left of people ={people } is just a variable it can be something else, but{people is the getter}
  return (
    <div className="App">
      <Form people={people} setPeople={setPeople} />
      {
        people.map((person)=>{
          return <PersonCard firstName = {person.firstName} lastName = {person.lastName} age={person.age} 
          hairColor={person.hairColor} id = {person.id} people={people} setPeople={setPeople} />
        })
      }
    </div>
  );
}

export default App;
// eslint-disable-next-line 
// used to make person objects using props
{/* <PersonCard
        lastName = {'Doe'}
        firstName ={'Jane'} 
        age = {45}
        hairColor={'Black'} />
      <PersonCard
        lastName = {'Smith'}
        firstName ={'John'} 
        age = {88}
        hairColor={'Brown'} />
      <PersonCard
        lastName = {'Fillmore'}
        firstName ={'Millard'} 
        age = {50}
        hairColor={'Brown'} />
      <PersonCard
        lastName = {'Smith'}
        firstName ={'Maria'} 
        age = {62} */}
        // hairColor={'Blonde'} />

      //instead of using props to make personcard object, use an array of objects instead//
      //   const people =[
      //     {lastName: 'Doe', 
      //     firstName:'Jane', 
      //     age: 45,
      //     hairColor:'Black'
      //     }, 
      //     {lastName: 'Smith', 
      //     firstName:'John', 
      //     age: 88,
      //     hairColor:'Brown'
      //     }, 
      //     {lastName: 'Filmore', 
      //     firstName:'Millard', 
      //     age: 50,
      //     hairColor:'Brown'
      //     }, 
      //     {lastName: 'Smith', 
      //     firstName:'Maria', 
      //     age: 62,
      //     hairColor:'Blonde'
      //     }
      // ]