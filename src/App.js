import { useState, useEffect } from 'react';
import { format } from 'date-fns'
import './App.css';

function App() {
  const militarFormat = "kk:mm:ss";
  const commonFormat = "pp";
  const [currentDate, setCurrentDate] = useState(format(new Date(), militarFormat));

  const updateDate = (newDate, formatingStyle = "pp") => setCurrentDate(format(newDate, formatingStyle));
  
  useEffect(()=>{
    setInterval(() => updateDate(new Date(), militarFormat),1000);
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
