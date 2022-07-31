import './App.css';
import React from "react";
import {useParams} from 'react-router-dom'; 
import {
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";

const Home = (props)=> {
  return(
    <div>
      <h1> Welcome</h1>
    </div>
  ); 
}

const PramasComponent =(props) =>{
  const {word, color, bgColor} =useParams(); 
  return (
    <div>
      {
        isNaN(word)? //if word param is NOT a number:
        <p style={
          color?
          {color: color, backgroundColor: bgColor}:null
          }>
            This is a word: {word}
        </p>
        :
        <p>
          This is a number: {word}
        </p>
      }
    </div>
  )
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/:word" element={<PramasComponent />}/>
        <Route path="/:word/:color/:bgColor" element={<PramasComponent />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
