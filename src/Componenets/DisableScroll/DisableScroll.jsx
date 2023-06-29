import React, { useState } from "react";
import "./DisableScroll";
import Modal from "../Modal/ModalExample";
import { LoremIpsum } from "react-lorem-ipsum";

const DisableScroll = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; //This will stop the parent from having a scroll effect. Still keeping the modal scroll.
    document.body.classList.add("disable-scrolling"); // Apply the CSS class to disable scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("disable-scrolling"); // Remove the CSS class to re-enable scrolling
  };

  return (
    <div className="disable-scrolling">
      <LoremIpsum p={33} /> <button onClick={openModal}>Open Modal</button>
      <Modal show={isModalOpen} onClose={closeModal}></Modal>
    </div>
  );
};

export default DisableScroll;
