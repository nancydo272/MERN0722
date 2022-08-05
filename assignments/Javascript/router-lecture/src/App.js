
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'; 
import Home from './components/Home'; 
import About from './components/About'; 
import Person from './components/Person'; 
import { useState } from 'react'; 

function App() {

  const [state, setState] = useState([
    {
      id: 1, 
      name: "Person 1", 
      age: "whatever", 
      somethingElse: "Blah"
    }, 
    {
      id: 2, 
      name: "Person 2", 
      age: "who knows", 
      somethingElse: "Blah"
    }, 
    {
      id: 3, 
      name: "Person 3", 
      age: "uhh", 
      somethingElse: "Blah"
    }
  ])

  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to ="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <Routes>
          <Route path ="/home" element={<Home people= {state} />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/person/:id" element={<Person people= {state} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Route path ="/home" element={<Home props={}/>}/> --> if you had state to pass in
//if you see a : and a word in a URL, it stands for a variable that the user is going to input, and the compnent handles the number
//<Route path ="/home/:num" element={<Home />}/>
//Everything outside of <Routes> will render no matter what, and withing <routes> it will render depending what is there
//With NavLink, no matter which component we are on, we will see the navlink elements since they are outside the <routes>
//NavLink has a class="active" that we can use to customize out CSS