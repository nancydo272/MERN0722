
import './App.css';
import { useState, useEffect } from 'react'; 

function App() {
  
  const [state, setState] = useState([]); 

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((result)=>{
      console.log(result)
      return result.json()
    })
    .then((res)=>{
      console.log(res)
      setState(res.results)
    })
    .catch((error)=>{
      console.log("error")
    })
  }, [])
  return (
    <div className="App">
      {state.map((pokeman, index)=>{
        return(
          <div key={index}> {pokeman.name}</div>
        )
      })}
    </div>
  );
}

export default App;
