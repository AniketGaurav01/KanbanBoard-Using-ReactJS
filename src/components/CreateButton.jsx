import { useState } from "react";
import Modal from "./Modal";
import "./styles.css";

function CreateButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center justify-center px-6 py-3 rounded-3xl bg-indigo-600 text-white shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-200 font-medium text-base h-[50px]"
      >
        <div className="text-2xl font-bold leading-none">+</div>
        <div className="ml-2">Create Task</div>
      </button>
      {isModalOpen && <Modal closeModal={closeModal} />} 
    </>
  );
}

export default CreateButton;