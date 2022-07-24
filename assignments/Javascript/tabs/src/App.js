
import { useState} from 'react'; 
import Tab from './components/Tab'; 
import './App.css';

function App() {

  const tabsArr = [
    {tab: "Tab 1 content is shown here" },
    {tab: "Tab 2 content is shown here" }, 
    {tab: "Tab 3 content is shown here" }
  ];

  const [tab, setTab] = useState(tabsArr[0].tab); 
  
  return (
    <div className="App">
      <h1>Tab Components </h1>
      <div style = {{display:"flex"}}>
        <Tab tab={tab} setTab={setTab} tabsArr = {tabsArr}/>
      </div>
    </div>
  );
}

export default App;
