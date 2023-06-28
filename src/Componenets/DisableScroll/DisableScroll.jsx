import React, { useState } from "react";
import "./DisableScroll";
import Modal from "../Modal/ModalExample";
import { LoremIpsum } from "react-lorem-ipsum";

const DisableScroll = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("disable-scrolling");
  };

  return (
    <div>
      <LoremIpsum p={33} />{" "}
    </div>
  );
};

export default DisableScroll;
