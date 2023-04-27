import React, {useState} from 'react'
import './Counter.scss';
const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [counterEvan, setCounterEvan] = useState(0);
  
    const updateCounter = (operator) => {
      operator === "+" ? setCounter(prevCounter => prevCounter + 1)
       : setCounter(prevCounter => prevCounter - 1);
    }

    const updateEvanWay = (event) => {
      console.log(event.target.innerHTML);
      event.target.innerHTML === "+" ? setCounterEvan(prevCounterEvan => prevCounterEvan + 1)
      : setCounterEvan(prevCounterEvan => prevCounterEvan - 1);
    }
  
    return (
      <div className='mainContainer'>
        <table>
          <thead>
            <tr>
              {/* Craig's original way */}
              <th><button onClick={() => updateCounter("+")}>+</button> OR <button onClick={() => updateCounter("-")}>-</button></th>
              <th>{counter}</th>
            </tr>
            <tr>
                {/* Evan shared with me way */}
                <th><button onClick={(event) => updateEvanWay(event)}>+</button> OR <button onClick={(event) => updateEvanWay(event)}>-</button></th>
                <th>{counterEvan}</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    )
  }

export default Counter