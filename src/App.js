import { useState, useEffect } from 'react';
import { format } from 'date-fns'
import './App.css';

function App() {
  const MILITAR_FORMAT = "kk:mm:ss";
  const COMMON_FORMAT = "pp";
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentFormat, setCurrentFormat] = useState(MILITAR_FORMAT);

  const formatDate = (date, formatingStyle = "pp") => format(date, formatingStyle);
  
  useEffect(()=>{
    setInterval(() => setCurrentDate(new Date()),1000);
  }, [])

  return (
    <div id="clock"> 
    
      <span>{formatDate(currentDate, currentFormat)}</span>
      <div id="formats">
        <input 
          id="formato24H" 
          type="radio" 
          name="formato" 
          onChange={()=> setCurrentFormat(MILITAR_FORMAT)} 
          checked={ currentFormat === MILITAR_FORMAT }
        />
        <label htmlFor="formato24H">24H</label>
        <input 
          id="formato12H" 
          type="radio" 
          name="formato" 
          onChange={()=> setCurrentFormat(COMMON_FORMAT)} 
          checked={ currentFormat === COMMON_FORMAT }
        />
        <label htmlFor="formato12H">12H</label>
      </div>
    
  </div>
  );
}

export default App;
