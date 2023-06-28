import React, { useState } from 'react';
import './App.scss';
// import Header from './Componenets/Header/Header';
// import Getapi from './Componenets/Getapi/Getapi';
// import Counter from './Componenets/Counter/Counter';
// import Goals from './Componenets/Goals/Goals';
// import OnBlurExample from './Componenets/onBlur/OnBlurExample';
import Modal from './Componenets/Modal/ModalExample';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }



  return (
    <div className="App">
      {/* <Header />
      <Getapi />
      <Counter />
      <Goals title={"Learn about React"} description={"Work to get better at React"} />
      <Goals title={"Learn Hooks"} description={"I want to learn and understand hooks much better"} />  
      <OnBlurExample /> */}
      <button onClick={openModal}>Open Modal</button>

      <Modal show={isModalOpen} onClose={closeModal}>

      </Modal>

    </div>
  );
}

export default App;

