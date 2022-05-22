import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavbarView from "./NavbarView";

const Navbar = () => {
  const searchRef = useRef();
  const navigate = useNavigate();

  function handleSearch() {
    const refSearch = searchRef.current.value;
    navigate(`/items?search=${refSearch}`);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <NavbarView
      handleKeyDown={handleKeyDown}
      searchRef={searchRef}
      handleSearch={handleSearch}
    />
  );
};

export default Navbar;
