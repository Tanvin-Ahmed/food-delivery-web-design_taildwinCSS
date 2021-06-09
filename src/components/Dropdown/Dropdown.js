import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ toggle, isOpen }) => {
  return (
    <div
      onClick={toggle}
      className={
        isOpen
          ? "grid grid-row-4 text-center items-center bg-yellow-500"
          : "hidden"
      }
    >
      <Link to="/" className="p-4">
        Home
      </Link>
      <Link to="/menu" className="p-4">
        Menu
      </Link>
      <Link to="/about" className="p-4">
        About
      </Link>
      <Link to="/contact" className="p-4">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
