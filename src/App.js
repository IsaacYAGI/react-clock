import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const updateDate = (newDate) => setCurrentDate(newDate.getTime());
  
  useEffect(()=>{
    setInterval(() => updateDate(new Date()),1000);
  }, [])

  return (
    <div id="clock"> 
    
      <span>{currentDate}</span>
      <div id="formats">
        <input id="formato24H" type="radio" name="formato"/>
        <label htmlFor="formato24H">24H</label>
        <input id="formato12H" type="radio" name="formato"/>
        <label htmlFor="formato12H">12H</label>
      </div>
    
  </div>
  );
}

export default App;
