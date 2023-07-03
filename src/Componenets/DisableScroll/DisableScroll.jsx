import React, { useState } from "react";
import "./DisableScroll";
import Modal from "../Modal/ModalExample";
import { LoremIpsum } from "react-lorem-ipsum";

const DisableScroll = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const flipIsModalOpen = () => {
    setIsModalOpen(!isModalOpen);
    console.log(`Set: ${isModalOpen}`);
    isModalOpen
      ? document.body.classList.remove("disable-scrolling")
      : document.body.classList.add("disable-scrolling");
  };

  return (
    <div>
      <LoremIpsum p={33} />
      <button onClick={flipIsModalOpen}>Open Modal</button>
      <Modal show={isModalOpen} onClose={flipIsModalOpen}></Modal>
    </div>
  );
};

export default DisableScroll;
