import Form from './components/Form'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Form 
      firstName ={'John'}
      lastName={'Smith'}
      email ={'johnsmith@johnsmith.com'}
      password ={'password'}
      confirm={'password'}
      />
      
    </div>
  );
}

export default App;
