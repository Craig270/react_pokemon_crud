import React, { useState } from "react";
import "./DisableScroll";
import Modal from "../Modal/ModalExample";

const DisableScroll = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("disable-scrolling");
  };

  return <div>DisableScroll</div>;
};

export default DisableScroll;
