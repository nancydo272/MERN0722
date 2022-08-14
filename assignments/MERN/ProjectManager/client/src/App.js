import './App.css';
import Form from './components/Form'; 
import ProductList from './components/ProductList'; 
import OneProduct from './components/OneProduct';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Form />}/>
          <Route path ="/productlist" element={<ProductList />}/>
          <Route path ="/products/:id" element={<OneProduct />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
