import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoMeli from "./LogoMeli";

const NavbarView = ({ searchRef, handleKeyDown, handleSearch }) => {
  return (
    <header className="bg-mercadolibre px-5">
      <div className="container mx-auto flex items-center">
        <Link to="/">
          <LogoMeli />
        </Link>
        <div className="w-full flex py-[9px] ">
          <input
            type="text"
            id="search"
            name="search"
            ref={searchRef}
            placeholder="Nunca dejes de buscar"
            className="w-full bg-white py-1 px-3 rounded-sm h-8 border-none shadow-sm shadow-gray-400"
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            onClick={handleSearch}
            className="bg-gray-200 px-3 shadow-sm shadow-gray-400 rounded-sm"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarView;
