import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import Counter from './counter';
import reportWebVitals from './reportWebVitals';
 
function App(){
  const [delta,setDelta] = useState(1);

  function onChange(e){
    setDelta(e.target.value);
  }

  return(
    <div>
      <span>the amount of the counter</span>
      <input type="number" value={delta} onChange={onChange}/>

      <Counter delta = {delta} />
      <Counter delta = {delta} />
      <Counter delta = {delta} />
      <Counter delta = {delta} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
