import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import AuthorList from './components/AuthorList'; 
import Form from './components/Form'; 
import EditForm from './components/EditForm'; 

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorList />}/>
          <Route path="/new" element={<Form />}/>
          <Route path="/edit/:id" element={<EditForm />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
