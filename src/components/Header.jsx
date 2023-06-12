import React from "react";

const Header = ({ changeShowModal }) => {
  const handleClickShowModal = () => {
    changeShowModal();
  };

  return (
    <section className="flex justify-between items-center p-4">
      <h1 className="font-bold text-2xl">Usuarios</h1>
      <button
        onClick={handleClickShowModal}
        className="btn-primary flex items-center hover:bg-hover transition duration-300 ease-in hover:text-black rounded-md"
      >
        <i className="bx bx-plus"></i>Crear nuevo usuario
      </button>
    </section>
  );
};

export default Header;
