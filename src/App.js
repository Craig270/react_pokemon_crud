import React, { useState } from 'react';
import './App.scss';
// import Header from './Componenets/Header/Header';
// import Getapi from './Componenets/Getapi/Getapi';
// import Counter from './Componenets/Counter/Counter';
// import Goals from './Componenets/Goals/Goals';
// import OnBlurExample from './Componenets/onBlur/OnBlurExample';

import Modal from './Componenets/Modal/ModalExample';
import DisableScroll from './Componenets/DisableScroll/DisableScroll';
import UseEffectPractice from './Componenets/UseEffectPractice/UseEffectPractice';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const flipIsModalOpen = () => {
    setIsModalOpen(!isModalOpen);
    console.log(`Set: ${isModalOpen}`);
    isModalOpen ? document.body.classList.remove("disable-scrolling") :
      document.body.classList.add("disable-scrolling");
  };


  return (
    <div className="App">
      {/* <Header />
      <Getapi />
      <Counter />
      <Goals title={"Learn about React"} description={"Work to get better at React"} />
      <Goals title={"Learn Hooks"} description={"I want to learn and understand hooks much better"} />  
      <OnBlurExample /> 
      <button onClick={flipIsModalOpen}>Open Modal</button>

      <Modal show={isModalOpen} onClose={flipIsModalOpen}>

      </Modal>
      <DisableScroll />
      */}
      <UseEffectPractice />
    </div>
  );
}

export default App;

