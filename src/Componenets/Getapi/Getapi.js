import React, {useState} from 'react';
import './Getapi.scss';

const Getapi = () => {

  const [counter, setCounter] = useState(0);

  const updateCounter = (event) => {
    console.log(event.target.innerText);
    // operator === "+" ? setCounter(prevCounter => prevCounter + 1)
    // : setCounter(prevCounter => prevCounter - 1);
  }

  return (
    <div className='mainContainerGetapi'>
      <table>
        <thead>
          <tr>
            <th><button onClick={(event) => updateCounter(event)}>+</button> OR Getapi<button onClick={(event) => updateCounter(event)}>-</button></th>
            {/* <th><button onClick={(event) => updateCounter("+")}>+</button> OR Getapi<button onClick={() => updateCounter("-")}>-</button></th> */}
            <th>{counter}</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  )
}

export default Getapi