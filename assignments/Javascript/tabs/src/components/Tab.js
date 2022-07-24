import React from 'react';


const Tab = (props) => {
    const [tab, setTab, tabsArr] = props

    
    return (
        <div>
            <button onClick = {()=>setTab(tabsArr[0].tab)}>Tab 1</button>
            <p>{tab}</p>
        </div>
        
    );
};
export default Tab; 