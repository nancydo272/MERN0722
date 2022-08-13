import './App.css';
import { BrowserRouter, Routes, Route}  from 'react-router-dom'; 
import Form from './components/Form'; 
import MovieList from './components/MovieList'; 
import NavBar from './components/NavBar';
import OneMovie from './components/OneMovie'; 
import EditForm from './components/EditForm'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path ="/movielist" element ={<MovieList /> } />
          <Route path="/movie/:id" element ={<OneMovie />}/>
          <Route path ="/editmovie/:id" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
