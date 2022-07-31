
import './App.css';
import React,{ useState, useEffect } from 'react'; 
import axios from 'axios'; 

function App() {
  
  const [state, setState] = useState([]); 

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((response) =>{
      console.log(response.data.results)
      setState(response.data.results)
    })
    .catch((err)=> console.log(err))
  }, []); 
  return (
    <div className="App">
      <ul>
          {state.map((pokeman, index)=>(
            <li key={index}> {pokeman.name}</li>
          ))}
        </ul>
    </div>
  ); 
}
export default App;
 //const [state, setState] = useState([]); 

  // useEffect(()=>{
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
  //   .then((result)=>{
  //     console.log(result)
  //     return result.json()
  //   })
  //   .then((res)=>{
  //     console.log(res)
  //     setState(res.results)
  //   })
  //   .catch((error)=>{
  //     console.log("error")
  //   })
  // }, [])
  // return (
  //   <div className="App">
  //     {
  //       state.map((pokeman, index)=>{
  //       return(
  //         <div key={index}> {pokeman.name}</div>
  //       )
  //     })}
  //   </div>
  // );