import './App.css';

function App() {
  return (
    <div id="clock"> 
    
      <span>Wed Jul 07 2021 08:54:08 GMT-0500</span>
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
