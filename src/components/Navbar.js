import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const searchRef = useRef();

  return (
    <header className="bg-mercadolibre">
      <div className="container mx-auto flex items-center">
        <img
          src="/img/mercadolibre-curso.png"
          alt="logo mercadolibre"
          width={40}
          height={40}
          className="mr-3"
        />
        <div className="w-full flex py-[9px] ">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Nunca dejes de buscar"
            ref={searchRef}
            className="w-full bg-white py-1 px-3 rounded-sm h-8 border-none shadow-sm shadow-gray-300"
          />
          <button className="bg-gray-200 px-3 shadow-sm shadow-gray-300">
            <FaSearch />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
