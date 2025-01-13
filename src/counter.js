
import { useState } from 'react';

export default function Counter(props) {
  const [count,setCount] = useState(0);
  const {delta} = props;

  
  function updateCounter(){
    setCount(oldValue => oldValue + Number(delta) )
  }

  function resetButton(){
    setCount(0);
  }

  return (
    <div >
        <span>the number of the counter is {count}</span>
        <button onClick={updateCounter}>Click Me</button>
        <button onClick={resetButton}>Reset</button>
      <p></p>
    </div>
  );
}