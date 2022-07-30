
import './App.css';
import {useState, useEffect} from 'react'; 

function App() {

  const [state, setState] = useState([]); 

  useEffect(()=>{
    console.log("useEffect is running")
    fetch('https://reqres.in/api/users?page=2')
    .then((result)=>{
      console.log(result)
      return result.json()
    })
    .then((res)=>{
      console.log(res)
      setState(res.data)
    })
    .catch((error)=>{
      console.log("error")
    })

  }, [])
  
  return (
    <div className="App">
      {state.map((person)=>{
        return (
        <div>
            <h1>{person.first_name} {person.last_name} </h1>
            <h2>{person.email}</h2>
            <img src={person.avatar}></img>
        </div>
        )
      })}
    </div>
  );
}

export default App;


//lecture 7/21
//base APL url https://reqres.in/api/
//useEffect --> manages side effects --> whenever a compnent loads and you want an action to happen while the components loads
//useEffect takes in 2 parameteres 1. call back function ()=>2. dependency array, 
//need this so the useEffect does not inifinte loop b/c everytime a state changes, compnonets re-renders
//here we will use useEffect to make an API call, so as soon as this components load, data from the api will load as well
//fetch() will call api for us, it takes in a url address, only works in the browser. --> asynchronous operation, need to handle it b/c javascript does not know how to handle it
//Use promises to handle it --> .then().catch() --> promise to make the request fetch, get a response, and if it works it will run .then(), didn;t work .catch()
//.then and .catch each require a call back, result/error parameter is whatever you are getting back from the request 
//Response object from API in console, status tell you if it was successful or not --> we cannot work with this response object, need to conver into JSON!
//need to chaing asychronous statement to change into JSON. 