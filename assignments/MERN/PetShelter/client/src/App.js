import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import PetList from './components/PetList'; 
import Form from './components/Form'; 
import EditForm from './components/EditForm'; 
import OnePet from './components/OnePet'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<PetList />} />
          <Route path ="/pets/new" element={<Form />} />
          <Route path ="/pets/:id/edit" element={<EditForm />} />
          <Route path ="/pets/:id" element={<OnePet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
