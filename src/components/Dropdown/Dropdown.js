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
      <Link to="/" className="p-4">
        Menu
      </Link>
      <Link to="/" className="p-4">
        About
      </Link>
      <Link to="/" className="p-4">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
